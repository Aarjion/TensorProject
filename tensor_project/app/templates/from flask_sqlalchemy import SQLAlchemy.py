from flask import Flask, request, session, redirect, json
from flask.templating import render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
#from flask_login import login_required#, LoginManager#, UserMixin
import hashlib
from sqlalchemy import text
import re


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

class Materials(db.Model):
    __tablename__='materials' 
    id = db.Column(db.Integer, primary_key=True)
    name_material = db.Column(db.String)
    units_measurement = db.Column(db.String)
    surfaces = db.Column(db.String(3))
    auto = db.Column(db.Integer)

class Autotools(db.Model):
    __tablename__='autotools' 
    id = db.Column(db.Integer, primary_key=True)
    name_tools = db.Column(db.String)

class Apartments(db.Model):
    __tablename__='apartment' 
    id = db.Column(db.Integer, primary_key=True)
    name_room = db.Column(db.String)
    id_materials_ceiling = db.Column(db.Integer)
    id_tools_ceiling = db.Column(db.Integer)
    id_materials_floor = db.Column(db.Integer)
    id_tools_floor = db.Column(db.Integer)
    id_materials_walls = db.Column(db.Integer)
    id_tools_walls = db.Column(db.Integer)
    id_auto_material = db.Column(db.Integer)
    id_tools_auto_material = db.Column(db.Integer)
    square_walls = db.Column(db.Float)
    square_floor_ceiling = db.Column(db.Float)

    def __init__(self, square_walls, square_floor_ceiling):
        self.square_walls=square_walls
        self.square_floor_ceiling=square_floor_ceiling

def get_materials():
    sql = text("SELECT name_material, units_measurement  FROM materials Where surfaces % 10 = 1 and auto = '0' ORDER BY name_material")
    db_materials_floor = db.session.execute(sql).all()
    return db_materials_floor


a = get_materials()
print(a[1][1])

