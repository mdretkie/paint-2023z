#!/usr/bin/env python

from flask import Flask
from flask_cors import CORS
from api import api
from auth import init_app as init_auth_app
from common import db, populate_db


app = Flask(__name__)
app.config["SECRET_KEY"] = "l3jDhqTLq7cdp4whZaqRnmVXHDbtG2x6"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///../instance/example.db"
app.config["JWT_SECRET_KEY"] = "vbNQn7X1iLyPPL21dIIQB9aBQSYBOrpj"


CORS(app)
db.init_app(app)
init_auth_app(app)
app.register_blueprint(api)


def runBeforeServer():
    with app.app_context():
        # db.drop_all()
        db.create_all()
        # populate_db()


if __name__ == "__main__":
    runBeforeServer()
    app.run(debug=True, port=8080)
