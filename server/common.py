from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()



class Bilet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rodzaj_biletu = db.Column(db.String(50), nullable=False)
    miejsce = db.Column(db.String(50), nullable=False)
    imie = db.Column(db.String(50), nullable=False)
    nazwisko = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    telefon = db.Column(db.String(50), nullable=True)

    def __init__(self, id, rodzaj_biletu, miejsce, imie, nazwisko, email, telefon):
        self.id = id
        self.rodzaj_biletu = rodzaj_biletu
        self.miejsce = miejsce
        self.imie = imie
        self.nazwisko = nazwisko
        self.email = email
        self.telefon = telefon


# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     imie = db.Column(db.String(50), nullable=False)
#     nazwisko = db.Column(db.String(50), nullable=False)
#     email = db.Column(db.String(50), nullable=False)
#     telefon = db.Column(db.String(50), nullable=True)

#     def __init__(self, id, imie, nazwisko, email, telefon):
#         self.id = id
#         self.imie = imie
#         self.nazwisko = nazwisko
#         self.email = email
#         self.telefon = telefon


class Miejsce(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rzad = db.Column(db.Integer, nullable=False)
    numer_miejsca = db.Column(db.Integer, nullable=False)
    czy_dostepne = db.Column(db.Boolean, nullable=False)

    def __init__(self, id, rzad, numer_miejsca, czy_dostepne):
        self.id = id
        self.rzad = rzad
        self.numer_miejsca = numer_miejsca
        self.czy_dostepne = czy_dostepne


class Film(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    poster = db.Column(db.String(255), nullable=False)
    tytul = db.Column(db.String(50), nullable=False)
    gatunek = db.Column(db.String(50), nullable=False)
    wiek = db.Column(db.String(50), nullable=False)
    czas_trwania = db.Column(db.String(50), nullable=False)
    rok_produkcji = db.Column(db.String(50), nullable=False)
    dostepne_godziny = db.Column(db.String(255), nullable=False)
    daty = db.Column(db.String(255), nullable=False)

    def __init__(
        self,
        id,
        poster,
        tytul,
        gatunek,
        wiek,
        czas_trwania,
        rok_produkcji,
        dostepne_godziny,
        daty,
    ):
        self.id = id
        self.poster = poster
        self.tytul = tytul
        self.gatunek = gatunek
        self.wiek = wiek
        self.czas_trwania = czas_trwania
        self.rok_produkcji = rok_produkcji
        self.dostepne_godziny = dostepne_godziny
        self.daty = daty


def saveEntryToDatabase(data) -> None:
    rodzaj_biletu = data["rodzaj_biletu"]
    miejsce = data["miejsce"]
    imie = data["imie"]
    nazwisko = data["nazwisko"]
    email = data["email"]
    telefon = data["telefon"]
    new_user = Bilet(rodzaj_biletu, miejsce, imie, nazwisko, email, telefon)
    db.session.add(new_user)
    db.session.commit()
