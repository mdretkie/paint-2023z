from typing import Any
from flask import Blueprint, session, request, jsonify, flash
from paint.server.common import saveEntryToDatabase
from paint.server.seats import all_seats
from datetime import datetime, timedelta

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/repertuar", methods=["GET"])
def home() -> Any:
    films = [
        {
            "id": 1,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska [2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 20:00",
            "dates": "2024-01-20, 2024-01-21, 2024-01-22, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26",
        }
    ]
    return jsonify(films)


@api.route("/repertuar/<string:date>", methods=["GET"])
def films(date: str) -> Any:
    films = [
        {
            "id": 1,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska [2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 20:00",
            "dates": "2024-01-20, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26",
        },
    ]

    films_with_date = [film for film in films if date in film["dates"].split(", ")]

    return jsonify(films_with_date)


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
    films = [
        {
            "id": 1,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska [2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 18:00, 20:00",
            "dates": get_dates(),
        },
        {
            "id": 2,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska[2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 18:00, 20:00",
            "dates": get_dates(),
        },
    ]
    for film in films:
        if film["id"] == id:
            return jsonify(film)

    return jsonify({"error": "Film not found"})


def get_dates() -> str:
    today = datetime.now().date()
    dates = [today + timedelta(days=i) for i in range(7)]
    dates_str = ", ".join([date.strftime("%Y-%m-%d") for date in dates])
    return dates_str


@api.route("/seats", methods=["GET", "PUT"])
def seats() -> Any:
    unavailable_seats = [seat for seat in all_seats if not seat["available"]]
    match request.method:
        case "GET":
            return unavailable_seats
        case "PUT":
            selected_seats = request.get_json()
            selected_seats = [
                {**seat, "available": not seat["available"]} for seat in selected_seats
            ]
            return {"success": selected_seats}


@api.route("/buyer-data", methods=["POST"])
def buyer_data() -> Any:
    data = request.get_json()
    saveEntryToDatabase(data)

    return {
        "success": True,
    }


@api.route("/payment", methods=["POST"])
def payment() -> Any:
    return {
        "success": True,
    }


# @api.route("/login", methods=["POST"])
# def login() -> Any:
#    username, password = request.form["username"], request.form["password"]

#    if session.get("user") is None and username == password == "dev":
#        session["user"] = username
#        return {"success": True}
#    else:
#        return {"success": False}


def login() -> Any:
    try:
        username = request.form["username"]
        password = request.form["password"]

        # czy pola nie są puste
        if not username or not password:
            raise ValueError("Puste pole użytkownika lub hasła")

        # sprawdzenie poprawności wprowadzonych danych
        if session.get("user") is None and username == password == "dev":
            session["user"] = username
            return jsonify({"success": True})
        else:
            raise ValueError("Niepoprawne dane logowania")

    except KeyError as e:
        # brak pola w formularzu
        return jsonify({"error": f"Brak wymaganego pola: {str(e)}"}), 400

    except ValueError as e:
        # niepoprawne dane
        flash(str(e), category="error")
        return jsonify({"error": str(e)}), 401


@api.route("/sign-up", methods=["GET", "POST"])
def sign_up():
    if request.method == "POST":
        email = request.form.get("email")
        first_name = request.form.get("firstName")
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")

        if len(email) < 4 or "@" not in email:
            flash("Wrong Email!", category="error")
        elif len(first_name) < 2:
            flash("First name is too short", category="error")
        elif password1 != password2:
            flash("Password don't match!", category="error")
        else:
            # tu bedzie wprowadzanie danych do bazy po udanej rejestracji
            return redirect(url_for(""))

        # Do dokończenia


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
            data = {
                k: request.form.get(k)
                for k in ["imię", "nazwisko", "e-mail", "telefon"]
            }


@api.route("/filmy", methods=["POST"])
def filmy() -> Any:
    data = {
        k: request.form.get(k)
        for k in [
            "plakat",
            "tytuł",
            "typ",
            "minimalny wiek",
            "czas trwania",
            "produkcja",
            "dostępne godziny seansów",
        ]
    }
    return {}
