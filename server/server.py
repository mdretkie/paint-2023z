#!/usr/bin/env python

from flask import Flask, jsonify
from flask_cors import CORS
from paint.server.api import api
from paint.server.common import db
from flask import Flask, render_template, request, jsonify
# from common import Bilet, saveEntryToDatabase


app = Flask(__name__)
app.register_blueprint(api)
app.config.from_mapping(
    # To nie powinno być commitowane na gita.
    SECRET_KEY="7b735b01a8d30801b6da30978d4e14a6d27a5b46036d8f4182bc96c027beed8c",
)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../instance/example.db'

db.init_app(app)
CORS(app)


def runBeforeServer():
   with app.app_context():
        db.drop_all()
        db.create_all()

@app.route("/api/home", methods=['GET'])
def return_home():
  return jsonify({
    'message': 'Hello, World!'
  })

if __name__ == "__main__":
  runBeforeServer()
  app.run(debug=True, port=8080)
