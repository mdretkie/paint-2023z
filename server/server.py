#!/usr/bin/env python

from flask import Flask, jsonify
from flask_cors import CORS
from paint.server.api import api

app = Flask(__name__)
CORS(app)

app.register_blueprint(api)

@app.route("/api/home", methods=['GET'])
def return_home():
  return jsonify({
    'message': 'Hello, World!'
  })

if __name__ == "__main__":
  app.run(debug=True, port=8080)
