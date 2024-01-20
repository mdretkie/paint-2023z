#!/usr/bin/env python

from flask import Flask
from flask_cors import CORS
from paint.server.api import api
from paint.server.common import db
from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity


app = Flask(__name__)
app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.register_blueprint(api)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../instance/example.db'
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'  # Change this!


CORS(app)
db.init_app(app)
jwt = JWTManager(app)

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.username)
        return jsonify(access_token=access_token), 200
    return jsonify({'message': 'invalid username or password'}), 401

@app.route("/is_logged_in", methods=["GET"])
@jwt_required()
def is_logged_in():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(username=data['username'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'registered successfully'}), 200


def runBeforeServer():
   with app.app_context():
        # db.drop_all()
        db.create_all()

if __name__ == "__main__":
  runBeforeServer()
  app.run(debug=True, port=8080)
