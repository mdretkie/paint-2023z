from flask import Blueprint, request, session
from typing import Any

auth = Blueprint("auth", __name__, url_prefix="/auth")

@auth.route("/login", methods=["POST"])
def login() -> Any:
    username, password = request.form["username"], request.form["password"]

    if username == password == "dev":
        session["user"] = username
        return {"success": True}
    else:
        return {"success": False}


@auth.route("/logout", methods=["POST"])
def login() -> Any:
    session["user"] = None
    return {"success": True}
