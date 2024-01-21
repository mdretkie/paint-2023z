import random
from typing import Any
from flask import Blueprint, request, jsonify
from common import db, Seans, Miejsce, Film, Bilet, User

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/repertuar", methods=["GET"])
def home() -> Any:
    all_films = Film.query.all()
    all_films = [film.to_dict() for film in all_films]
    return jsonify(all_films)


@api.route("/repertuar/<string:date>", methods=["GET"])
def films(date: str):
    all_films = Film.query.all()
    all_films = [film.to_dict() for film in all_films]
    date_films = [
        film for film in all_films if date in film["daty"].split(", ")]

    return jsonify(date_films)


@api.route("/cennik", methods=["GET"])  # TODO: change
def cennik() -> Any:
    return {
        "ulgowy 2d": 10,
        "normalny 2d": 10,
        "ulgowy 3d": 10,
        "normalny 3d": 10,
    }


@api.route("/film/<int:id>", methods=["GET"])
def film(id: int) -> Any:
    film = Film.query.get(id)

    if film is not None:
        return jsonify(film.to_dict())

    return jsonify({"error": "Film not found"})


@api.route("/seats/<int:screening_id>", methods=["GET"])
def seats(screening_id) -> Any:
    screening = Seans.query.get(screening_id)
    if not screening:
        return {"error": "Screening not found"}, 404

    unavailable_seats = Miejsce.query.filter_by(
        id_seansu=screening_id, czy_dostepne=False).all()
    return jsonify({"unavailable_seats": [seat.to_dict() for seat in unavailable_seats]})


@api.route("/seats/<int:screening_id>/<string:seat_row>/<int:seat_number>", methods=["PUT"])
def update_seat(screening_id: int, seat_row: str, seat_number: int) -> Any:
    seat = Miejsce.query.filter_by(
        id_seansu=screening_id, rzad=seat_row, numer=seat_number).first()
    if seat:
        seat.czy_dostepne = not seat.czy_dostepne
        db.session.commit()
        return {"success": "Seat updated"}
    else:
        return {"error": "Seat not found"}


@api.route("/ticket", methods=["POST"])
def create_ticket() -> Any:
    data = request.get_json()

    user = User.query.filter_by(name=data['username']).first()
    user_id = user.id if user else random.randint(1000, 9999)

    film = Film.query.get(data['film_id'])
    if film is None:
        return {"error": "Film not found"}, 404

    ticket = Bilet(
        tytul_filmu=film.tytul,
        data=data['data'],
        godzina=data['godzina'],
        miejsce=data['miejsce'],
        rodzaj_biletu=data['rodzaj_biletu'],
        user_id=user_id
    )

    db.session.add(ticket)
    db.session.commit()

    return {"success": "Ticket created", "ticket_id": ticket.id}
