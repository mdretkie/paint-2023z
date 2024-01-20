from typing import Any
from flask import Blueprint, session, request, jsonify
from paint.server.common import saveEntryToDatabase
from paint.server.seats import all_seats

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/repertuar", methods=["GET"])
def home() -> Any:
    films = [{
        "id": 1,
        "poster": "...",
        "title": "Chłopi",
        "type": "...",
        "age": "...",
        "duration": "...",
        "production": "...",
        "availableHours": "11:00, 12:00, 14:00, 16:00, 18:00, 20:00",
    }, {
        "id": 2,
        "poster": "...",
        "title": "Chłopi 2",
        "type": "...",
        "age": "...",
        "duration": "...",
        "production": "...",
        "availableHours": "12:00, 14:00, 16:00, 18:00, 20:00",
    }]
    return jsonify(films)


@api.route("/cennik", methods=["GET"])
def cennik() -> Any:
    return {
        "ulgowy 2d": 10,
        "normalny 2d": 10,
        "ulgowy 3d": 10,
        "normalny 3d": 10,
    }


@api.route("/film/<int:id>", methods=["GET"])
def film(id: int) -> Any:
    films = [{
        "id": 1,
        "poster": "...",
        "title": "Chłopi",
        "type": "...",
        "age": "...",
        "duration": "...",
        "production": "...",
        "availableHours": "11:00, 12:00, 14:00, 16:00, 18:00, 20:00",
    }, {
        "id": 2,
        "poster": "...",
        "title": "Chłopi 2",
        "type": "...",
        "age": "...",
        "duration": "...",
        "production": "...",
        "availableHours": "12:00, 14:00, 16:00, 18:00, 20:00",
    }]
    for film in films:
        if film["id"] == id:
            return jsonify(film)
    
    return jsonify({"error": "Film not found"})


@api.route("/seats", methods=["GET", "PUT"])
def seats() -> Any:
    unavailable_seats = [seat for seat in all_seats if not seat['available']]
    match request.method:
        case "GET":
            return unavailable_seats
        case "PUT":
            selected_seats = request.get_json()
            selected_seats = [{**seat, 'available': not seat['available']} for seat in selected_seats]
            return {"success": selected_seats}


@api.route("/buyer-data", methods=["POST"])
def buyer_data() -> Any:
    data = {k: request.form.get(k)
            for k in ["imię", "nazwisko", "e-mail", "telefon"]}  # TODO: remove
    data1 = request.get_json()
    saveEntryToDatabase(data1)

    return {
        "success": True,
    }


@api.route("/payment", methods=["POST"])
def payment() -> Any:
    return {
        "success": True,
    }


@api.route("/login", methods=["POST"])
def login() -> Any:
    username, password = request.form["username"], request.form["password"]

    if session.get("user") is None and username == password == "dev":
        session["user"] = username
        return {"success": True}
    else:
        return {"success": False}


@api.route("/logout", methods=["POST"])
def logout() -> Any:
    if session.get("user") is not None in session:
        session["user"] = None
        return {"success": True}
    else:
        return {"success": False}


@api.route("/user/<int:id>", methods=["GET", "POST"])
def user(id: int) -> Any:
    match request.method:
        case "GET":
            return {
                "imię": "...",
                "nazwisko": "...",
                "lista kupionych biletów": "...",
                "e-mail": "...",
                "telefon-mail": "...",
            }
        case "POST":
            data = {k: request.form.get(k)
                    for k in ["imię", "nazwisko", "e-mail", "telefon"]}


@api.route("/filmy", methods=["POST"])
def filmy() -> Any:
    data = {k: request.form.get(k)
            for k in ["plakat", "tytuł", "typ", "minimalny wiek", "czas trwania", "produkcja", "dostępne godziny seansów"]}
    return {}
