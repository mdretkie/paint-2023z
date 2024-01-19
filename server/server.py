#!/usr/bin/env python

from flask import Flask, jsonify
from flask_cors import CORS
from paint.server.api import api
from paint.server.common import db


app = Flask(__name__)
app.register_blueprint(api)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../instance/example.db'

db.init_app(app)
CORS(app)


def runBeforeServer():
   with app.app_context():
        db.drop_all()
        db.create_all()

if __name__ == "__main__":
  runBeforeServer()
  app.run(debug=True, port=8080)
