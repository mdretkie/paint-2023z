from flask import Blueprint
from paint.server.filmy import filmy
from paint.server.auth import auth

api = Blueprint("api", __name__, url_prefix="/api")
api.register_blueprint(filmy)
api.register_blueprint(auth)

@api.route("/", methods=["GET"])
def index() -> str:
    return "API Test"

