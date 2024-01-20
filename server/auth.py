from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from paint.server.common import db, User

auth = Blueprint("auth", __name__, url_prefix="/auth")
jwt = JWTManager()


def init_app(app):
    jwt.init_app(app)
    app.register_blueprint(auth)


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.username)
        return jsonify(access_token=access_token), 200
    return jsonify({'message': 'invalid username or password'}), 401


@auth.route("/is_logged_in", methods=["GET"])
@jwt_required()
def is_logged_in():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(username=data['username'])
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'registered successfully'}), 200
