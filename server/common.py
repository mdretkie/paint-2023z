import json
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class Bilet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tytul_filmu = db.Column(db.String(50), nullable=False)
    data = db.Column(db.String(50), nullable=False)
    godzina = db.Column(db.String(50), nullable=False)
    miejsce = db.Column(db.String(50), nullable=False)
    rodzaj_biletu = db.Column(db.String(50), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'tytul_filmu': self.tytul_filmu,
            'data': self.data,
            'godzina': self.godzina,
            'miejsce': self.miejsce,
            'rodzaj_biletu': self.rodzaj_biletu,
            'user_id': self.user_id
        }


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.String(50), nullable=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    tickets = db.relationship('Bilet', backref='user', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'surname': self.surname,
            'email': self.email,
            'phone': self.phone,
            'username': self.username,
            'tickets': [{"id": ticket.id, "tytul_filmu": ticket.tytul_filmu, "data": ticket.data, "godzina": ticket.godzina, "miejsce": ticket.miejsce, "rodzaj_biletu": ticket.rodzaj_biletu} for ticket in self.tickets]
        }

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Film(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    plakat = db.Column(db.String(255), nullable=False)
    tytul = db.Column(db.String(50), nullable=False)
    gatunek = db.Column(db.String(50), nullable=False)
    wiek = db.Column(db.String(50), nullable=False)
    czas_trwania = db.Column(db.String(50), nullable=False)
    rok_produkcji = db.Column(db.String(50), nullable=False)
    daty = db.Column(db.String(255), nullable=False)
    seanse = db.relationship('Seans', backref='film', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'plakat': self.plakat,
            'tytul': self.tytul,
            'gatunek': self.gatunek,
            'wiek': self.wiek,
            'czas_trwania': self.czas_trwania,
            'rok_produkcji': self.rok_produkcji,
            'daty': self.daty,
            'seanse': [{"id": seans.id, "godzina": seans.godzina} for seans in self.seanse]
        }

class Seans(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_filmu = db.Column(db.Integer, db.ForeignKey('film.id'))
    godzina = db.Column(db.String(50), nullable=False)
    miejsca = db.relationship('Miejsce', backref='seans', lazy=True)

class Miejsce(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rzad = db.Column(db.Integer, nullable=False)
    numer = db.Column(db.Integer, nullable=False)
    czy_dostepne = db.Column(db.Boolean, nullable=False)
    id_seansu = db.Column(db.Integer, db.ForeignKey('seans.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'rzad': self.rzad,
            'numer': self.numer,
            'czy_dostepne': self.czy_dostepne,
            'id_seansu': self.id_seansu
        }

# def saveEntryToDatabase(data) -> None:
#     rodzaj_biletu = data["rodzaj_biletu"]
#     miejsce = data["miejsce"]
#     imie = data["imie"]
#     nazwisko = data["nazwisko"]
#     email = data["email"]
#     telefon = data["telefon"]
#     new_user = Bilet(rodzaj_biletu, miejsce, imie, nazwisko, email, telefon)
#     db.session.add(new_user)
#     db.session.commit()

def populate_db():
    admin = User(name="admin", surname="admin", email="admin@admin.com", username="admin", password_hash=generate_password_hash("admin"))
    db.session.add(admin)
    db.session.flush()

    user = User(name="user", surname="user", email="user@user.com", username="user", password_hash=generate_password_hash("user"))
    db.session.add(user)
    db.session.flush()

    bilet = Bilet(tytul_filmu="Chłopi", data="2024-01-21", godzina="17:00", miejsce="Rząd: 4, Miejsce: 4", rodzaj_biletu="ulgowy", user_id=user.id)
    db.session.add(bilet)
    db.session.flush()

    with open('server/movies.json') as f:
        data = json.load(f)
        films = data['movies']

    with open('server/seats.json') as f:
        data = json.load(f)
        seats = data['seats']

    for film_data in films:
        film = Film(
            plakat=film_data["poster"],
            tytul=film_data["title"],
            gatunek=film_data["type"],
            wiek=film_data["age"],
            czas_trwania=film_data["duration"],
            rok_produkcji=film_data["production"],
            daty=film_data["dates"],
        )
        db.session.add(film)
        db.session.flush()

        for hour in film_data["screenings"].split(", "):
            screening = Seans(id_filmu=film.id, godzina=hour)
            db.session.add(screening)
            db.session.flush()

            for seat_data in seats:
                seat = Miejsce(
                    rzad=seat_data['row'],
                    numer=seat_data['number'],
                    czy_dostepne=seat_data['available'],
                    id_seansu=screening.id
                )
                db.session.add(seat)

    db.session.commit()