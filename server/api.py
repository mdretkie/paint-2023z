import random
from typing import Any
from flask import Blueprint, request, jsonify
from common import db, Seans, Miejsce, Film, Bilet

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
    date_films = [film for film in all_films if date in film["daty"].split(", ")]

    return jsonify(date_films)


@api.route("/cennik", methods=["GET"]) # TODO: change
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


@api.route("/seats/<int:screening_id>", methods=["GET", "PUT"])
def seats(screening_id) -> Any:
    screening = Seans.query.get(screening_id)
    if not screening:
        return {"error": "Screening not found"}, 404

    if request.method == "GET":
        unavailable_seats = Miejsce.query.filter_by(id_seansu=screening_id, czy_dostepne=False).all()
        return {"unavailable_seats": [seat.to_dict() for seat in unavailable_seats]}

    elif request.method == "PUT":
        selected_seats = request.get_json()
        for seat_id in selected_seats:
            seat = Miejsce.query.get(seat_id)
            if seat and seat.id_seansu == screening_id:
                seat.czy_dostepne = not seat.czy_dostepne
        db.session.commit()
        return {"success": "Seats updated"}


@api.route("/seats/<int:screening_id>/<string:seat_row>/<int:seat_number>", methods=["PUT"])
def update_seat(screening_id: int, seat_row: str, seat_number: int) -> Any:
    seat = Miejsce.query.filter_by(id_seansu=screening_id, rzad=seat_row, numer=seat_number).first()
    if seat:
        seat.czy_dostepne = not seat.czy_dostepne
        db.session.commit()
        return {"success": "Seat updated"}
    else:
        return {"error": "Seat not found"}
    
@api.route("/ticket", methods=["POST"])
def create_ticket() -> Any:
    data = request.get_json()

    # Get the user ID from the data, or generate a random multi-digit number if it's not provided
    user_id = data.get('user_id', random.randint(1000, 9999))

    # Create a new Bilet object
    ticket = Bilet(
        tytul_filmu=data['tytul_filmu'],
        data=data['data'],
        godzina=data['godzina'],
        miejsce=data['miejsce'],
        rodzaj_biletu=data['rodzaj_biletu'],
        user_id=user_id
    )

    # Add the new ticket to the session and commit it
    db.session.add(ticket)
    db.session.commit()

    # Return a success message
    return {"success": "Ticket created", "ticket_id": ticket.id}



@api.route("/payment", methods=["POST"])
def payment() -> Any:
    return {
        "success": True,
    }
