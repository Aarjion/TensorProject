from flask import Flask, request, session
from flask.templating import render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
#from flask_login import login_required#, LoginManager#, UserMixin
import hashlib

app = Flask(__name__, template_folder="app/templates", static_folder="app/static/")
app.config.from_object(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql+psycopg2://postgres:7105@localhost/tensor'
app.config['SECRET_KEY'] = 'cb02820a3e94d72c9f950ee10ef7e3f7a35b3f5b'
db = SQLAlchemy(app)


class User(db.Model):
    __tablename__='users' 
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String)
    password = db.Column(db.String)
    table_apartment = db.Column(db.Integer)

    def __init__(self, login, password):
        self.login=login
        self.password=password
        #self.table_apartment=table_apartment

CORS(app)
@app.route('/', methods=['POST', 'GET'])
@app.route('/counter', methods=['POST', 'GET'])
def index(): 
    return render_template('counter.html')


@app.route('/authorization')
def auth():
    return render_template('authorization.html')


@app.route('/authorization/submit', methods=['POST', 'GET'])
def auth_sub():
    username = request.form.get('check_login')
    password = request.form.get('check_pass')
    message = ""
    users_bd = db.session.query(User)
    
    for res in users_bd:
        if username == res.login:
            check_password_bd = res.password
            new_key = hashlib.md5(password.encode()).hexdigest()
            if(new_key  == check_password_bd):
                session['result_authorization'] = 1
                session['user'] = username
                session.modified = True
                message = "Авторизация прошла успешно"
            else:
                session['result_authorization'] = 0
                session.modified = True
                message = "Неверный пароль"
        else: message = "Неверный логин или пароль"


    return render_template('account.html', message=message)

@app.route('/registration', methods=['POST', 'GET'])
def reg_sub():
    message = ''
    username = request.form.get('login')
    password = request.form.get('pass')
    if(username is  None and password is  None):
        return render_template('registration.html')
    else:
        hash_object = hashlib.md5(password.encode()).hexdigest()
        try: 
            user = User(login=username, password=hash_object)
            db.session.add(user)
            db.session.commit()

        except Exception:
            message="Такой пользователь уже существует"
        else:
            message = "Пользователь зарегистрирован"
        return render_template('registration.html', message=message)



@app.route('/account')
def account():
    if(session['result_authorization'] == 1):
        return render_template('account.html')
    else:
        message="Авторизуйтесь для входа в личный кабинет"
        return render_template('authorization.html', message=message)

@app.route('/exit')
def exit():
    session['result_authorization'] = 0
    session['user'] = ''
    return render_template('counter.html')

if __name__ == '__main__':
    app.run(debug=True)
