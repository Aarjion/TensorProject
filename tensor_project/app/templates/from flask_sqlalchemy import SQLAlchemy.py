from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request
#from flask_login import login_required#, LoginManager#, UserMixin
import hashlib


app = Flask(__name__, template_folder="app/templates", static_folder="app/static/")
app.config.from_object(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql+psycopg2://postgres:7105@localhost/tensor'
app.config['SECRET_KEY'] = 'cb02820a3e94d72c9f950ee10ef7e3f7a35b3f5b'
db = SQLAlchemy(app)

class Materials(db.Model):
    __tablename__='materials' 
    id = db.Column(db.Integer, primary_key=True)
    name_material = db.Column(db.String)
    units_measurement = db.Column(db.String)
    surfaces = db.Column(db.String(3))
    auto = db.Column(db.Boolean)


