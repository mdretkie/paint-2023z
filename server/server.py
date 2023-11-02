#!/usr/bin/env python

from flask import Flask, jsonify
from flask_cors import CORS
from paint.server.api import api

app = Flask(__name__)
CORS(app)
app.config.from_mapping(
    # To nie powinno być commitowane na gita.
    SECRET_KEY="7b735b01a8d30801b6da30978d4e14a6d27a5b46036d8f4182bc96c027beed8c",
)
app.register_blueprint(api)


@app.route("/api/home", methods=['GET'])
def return_home():
  return jsonify({
    'message': 'Hello, World!'
  })

if __name__ == "__main__":
  app.run(debug=True, port=8080)
