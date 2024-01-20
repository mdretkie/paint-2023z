from typing import Any
from flask import Blueprint, session, redirect, url_for, request
from paint.server.common import saveEntryToDatabase
from paint.server.seats import all_seats

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/home", methods=["GET"])
def home() -> Any:
    return [
        {
            "plakat": "...",
            "tytuł": "...",
            "typ": "...",
            "minimalny wiek": "...",
            "czas trwania": "...",
            "produkcja": "...",
            "dostępne godziny seansów": "...",
        },
        {
            "plakat": "...",
            "tytuł": "...",
            "typ": "...",
            "minimalny wiek": "...",
            "czas trwania": "...",
            "produkcja": "...",
            "dostępne godziny seansów": "...",
        },
    ]


@api.route("/repertuar", methods=["GET"])
def repertuar() -> Any:
    return redirect(url_for("api.home"))


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
    return {
        "plakat": "...",
        "tytuł": "...",
        "typ": "...",
        "minimalny wiek": "...",
        "czas trwania": "...",
        "produkcja": "...",
        "dostępne godziny seansów": "...",
    }


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
