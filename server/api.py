from typing import Any
from flask import Blueprint, request, jsonify
from datetime import datetime, timedelta
from common import saveEntryToDatabase
from seats import all_seats

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
        },
        {
            "id": 2,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska [2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 20:00",
            "dates": "2024-01-20, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26",
        },
        {
            "id": 3,
            "poster": "https://example.com/oppenheimer_poster.jpg",
            "title": "Oppenheimer",
            "type": "drama",
            "age": "18",
            "duration": "150",
            "production": "USA [2024]",
            "availableHours": "13:00, 15:30, 18:00, 21:00",
            "dates": "2024-01-20, 2024-01-22, 2024-01-25, 2024-01-27, 2024-01-29",
        },
        {
            "id": 4,
            "poster": "https://example.com/spiderman_poster.jpg",
            "title": "Spider-Man: Across the Spider-Verse",
            "type": "action",
            "age": "PG-13",
            "duration": "120",
            "production": "USA [2024]",
            "availableHours": "10:30, 14:00, 17:30, 20:30",
            "dates": "2024-01-21, 2024-01-24, 2024-01-26, 2024-01-28, 2024-01-30",
        },
        {
            "id": 5,
            "poster": "https://example.com/inception_poster.jpg",
            "title": "Inception",
            "type": "sci-fi",
            "age": "PG-13",
            "duration": "148",
            "production": "USA [2010]",
            "availableHours": "12:00, 15:00, 18:30, 21:30",
            "dates": "2024-01-20, 2024-01-23, 2024-01-25, 2024-01-27, 2024-01-29",
        },
        {
            "id": 6,
            "poster": "https://example.com/cars_poster.jpg",
            "title": "Cars",
            "type": "animation",
            "age": "G",
            "duration": "117",
            "production": "USA [2006]",
            "availableHours": "11:30, 14:30, 17:00, 19:30",
            "dates": "2024-01-21, 2024-01-24, 2024-01-26, 2024-01-28, 2024-01-30",
        },
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
        {
            "id": 2,
            "poster": "https://creativereview.imgix.net/content/uploads/2023/12/Oppenheimer.jpg?auto=compress,format&q=60&w=1263&h=2000",
            "title": "Chłopi",
            "type": "obyczajowy",
            "age": "13",
            "duration": "116",
            "production": "Polska [2024]",
            "availableHours": "11:00, 12:00, 14:00, 16:00, 20:00",
            "dates": "2024-01-20, 2024-01-23, 2024-01-24, 2024-01-25, 2024-01-26",
        },
        {
            "id": 3,
            "poster": "https://example.com/oppenheimer_poster.jpg",
            "title": "Oppenheimer",
            "type": "drama",
            "age": "18",
            "duration": "150",
            "production": "USA [2024]",
            "availableHours": "13:00, 15:30, 18:00, 21:00",
            "dates": "2024-01-20, 2024-01-22, 2024-01-25, 2024-01-27, 2024-01-29",
        },
        {
            "id": 4,
            "poster": "https://example.com/spiderman_poster.jpg",
            "title": "Spider-Man: Across the Spider-Verse",
            "type": "action",
            "age": "PG-13",
            "duration": "120",
            "production": "USA [2024]",
            "availableHours": "10:30, 14:00, 17:30, 20:30",
            "dates": "2024-01-21, 2024-01-24, 2024-01-26, 2024-01-28, 2024-01-30",
        },
        {
            "id": 5,
            "poster": "https://example.com/inception_poster.jpg",
            "title": "Inception",
            "type": "sci-fi",
            "age": "PG-13",
            "duration": "148",
            "production": "USA [2010]",
            "availableHours": "12:00, 15:00, 18:30, 21:30",
            "dates": "2024-01-20, 2024-01-23, 2024-01-25, 2024-01-27, 2024-01-29",
        },
        {
            "id": 6,
            "poster": "https://example.com/cars_poster.jpg",
            "title": "Cars",
            "type": "animation",
            "age": "G",
            "duration": "117",
            "production": "USA [2006]",
            "availableHours": "11:30, 14:30, 17:00, 19:30",
            "dates": "2024-01-21, 2024-01-24, 2024-01-26, 2024-01-28, 2024-01-30",
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
        {
            "id": 3,
            "poster": "https://example.com/oppenheimer_poster.jpg",
            "title": "Oppenheimer",
            "type": "drama",
            "age": "18",
            "duration": "150",
            "production": "USA [2024]",
            "availableHours": "13:00, 15:30, 18:00, 21:00",
            "dates": get_dates(),
        },
        {
            "id": 4,
            "poster": "https://example.com/spiderman_poster.jpg",
            "title": "Spider-Man: Across the Spider-Verse",
            "type": "action",
            "age": "PG-13",
            "duration": "120",
            "production": "USA [2024]",
            "availableHours": "10:30, 14:00, 17:30, 20:30",
            "dates": get_dates(),
        },
        {
            "id": 5,
            "poster": "https://example.com/inception_poster.jpg",
            "title": "Inception",
            "type": "sci-fi",
            "age": "PG-13",
            "duration": "148",
            "production": "USA [2010]",
            "availableHours": "12:00, 15:00, 18:30, 21:30",
            "dates": get_dates(),
        },
        {
            "id": 6,
            "poster": "https://example.com/cars_poster.jpg",
            "title": "Cars",
            "type": "animation",
            "age": "G",
            "duration": "117",
            "production": "USA [2006]",
            "availableHours": "11:30, 14:30, 17:00, 19:30",
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
