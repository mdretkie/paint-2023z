#!/usr/bin/env python

from flask import Flask, jsonify
from flask_cors import CORS
from paint.server.api import api
from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config.from_mapping(
    # To nie powinno być commitowane na gita.
    SECRET_KEY="7b735b01a8d30801b6da30978d4e14a6d27a5b46036d8f4182bc96c027beed8c",
)
app.register_blueprint(api)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)

class Bilet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rodzaj_biletu = db.Column(db.String(50), nullable=False)
    miejsce = db.Column(db.String(50), nullable=False)
    imie = db.Column(db.String(50), nullable=False)
    nazwisko = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    telefon = db.Column(db.String(50), nullable=False)
    def __init__(self, rodzaj_biletu, miejsce, imie, nazwisko, email, telefon):
        self.rodzaj_biletu = rodzaj_biletu
        self.miejsce = miejsce
        self.imie = imie
        self.nazwisko = nazwisko
        self.email = email
        self.telefon = telefon

def saveEntryToDatabase(data)->None:
    rodzaj_biletu = data['rodzaj_biletu']
    miejsce = data['miejsce']
    imie = data['imie']
    nazwisko = data['nazwisko']
    email = data['email']
    telefon=data['telefon']
    new_user = Bilet(rodzaj_biletu,miejsce,imie,nazwisko,email,telefon)
    db.session.add(new_user)
    db.session.commit()

def runBeforeServer():
   with app.app_context():
        db.drop_all()
        db.create_all() 



@app.route("/api/home", methods=['GET'])
def return_home():
  return jsonify({
    'message': 'Hello, World!'
  })

if __name__ == "__main__":
  runBeforeServer()
  app.run(debug=True, port=8080)
