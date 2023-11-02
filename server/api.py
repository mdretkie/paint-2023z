from flask import Blueprint
from paint.server.filmy import filmy

api = Blueprint("api", __name__, url_prefix="/api")
api.register_blueprint(filmy)

@api.route("/", methods=["GET"])
def index() -> str:
    return "API Test"

