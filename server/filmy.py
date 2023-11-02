from flask import Blueprint, request
from typing import Any

filmy = Blueprint("filmy", __name__, url_prefix="/filmy")

@filmy.route("/", methods=["GET"])
def index() -> Any:
    return {"data": "Wszystkie filmy"}

@filmy.route("/<title>", methods=["GET"])
def film(title: str) -> Any:
    return {"data": f"Dane filmu '{title}'."}

@filmy.route("/repertuar", methods=["GET"])
def repertuar() -> Any:
    return {"data": "Repertuar"}

@filmy.route("/zapowiedzi", methods=["GET"])
def zapowiedzi() -> Any:
    return {"data": "Zapowiedzi"}
