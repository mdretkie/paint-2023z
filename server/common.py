from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

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



