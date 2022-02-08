from flask import Flask
from routes.books import books
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

user = os.environ['MYSQL_USER']
password = os.environ['MYSQL_PASSWORD']
database = os.environ['MYSQL_DATABASE']
host = os.environ['MYSQL_HOST']

app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{user}:{password}@{host}:3306/{database}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
app.register_blueprint(books)
