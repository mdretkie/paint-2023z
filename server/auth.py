import json
from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    jwt_required,
    get_jwt_identity,
)
from common import db, User, Bilet, Film, Seans, Miejsce

auth = Blueprint("auth", __name__, url_prefix="/auth")
jwt = JWTManager()


def init_app(app):
    jwt.init_app(app)
    app.register_blueprint(auth)


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()
    if user and user.check_password(data["password"]):
        access_token = create_access_token(identity={
        'username': user.username,
        'name': user.name,
        'surname': user.surname,
        'phone': user.phone,
        'email': user.email
    })
        return jsonify(access_token=access_token), 200
    return jsonify({"message": "invalid username or password"}), 401


@auth.route("/is_logged_in", methods=["GET"])
@jwt_required()
def is_logged_in():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

@auth.route("/is_admin_logged_in", methods=["GET"])
@jwt_required()
def is_admin_logged_in():
    current_user = get_jwt_identity()
    print(current_user)
    user = User.query.get(current_user["username"] == "admin")
    if user and user.id == 1:
        return jsonify(logged_in_as=current_user), 200
    else:
        return jsonify({"message": "Not logged in as admin"}), 403

@auth.route("/film/<int:id>", methods=["PUT"])
@jwt_required()
def update_film(id):
    current_user = get_jwt_identity()
    user = User.query.get(current_user["username"] == "admin")
    if user is None or user.id != 1:
        return jsonify({"message": "Not authorized"}), 403

    data = request.get_json()
    film = Film.query.get(id)
    if film is None:
        return jsonify({"message": "Film not found"}), 404

    film.plakat = data.get('plakat', film.plakat)
    film.tytul = data.get('tytul', film.tytul)
    film.gatunek = data.get('gatunek', film.gatunek)
    film.wiek = data.get('wiek', film.wiek)
    film.czas_trwania = data.get('czas_trwania', film.czas_trwania)
    film.rok_produkcji = data.get('rok_produkcji', film.rok_produkcji)
    film.daty = data.get('daty', film.daty)

    try:
        db.session.commit()
        return jsonify({"message": "Film updated successfully"}), 200
    except Exception as e:
        return jsonify({"message": "An error occurred while updating the film"}), 400


@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    user = User(
        name=data["name"],
        surname=data["surname"],
        email=data["email"],
        phone=data.get("phone"),
        username=data["username"]
    )
    user.set_password(data["password"])
    try:
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "registered successfully"}), 200
    except Exception as e:
        return jsonify({"message": "Ta nazwa uytkownika jest niedostępna"}), 400

@auth.route("/tickets", methods=["GET"])
@jwt_required()
def get_user_tickets():
    current_user = get_jwt_identity()
    username = current_user['username']
    user = User.query.filter_by(username=username).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    tickets = Bilet.query.filter_by(user_id=user.id).all()

    return jsonify({"tickets": [ticket.to_dict() for ticket in tickets]}), 200


@auth.route("/film", methods=["POST"])
@jwt_required()
def add_film():
    current_user = get_jwt_identity()
    user = User.query.get(current_user["username"] == "admin")
    if user is None or user.id != 1:
        return jsonify({"message": "Not authorized"}), 403

    data = request.get_json()
    film = Film(
        plakat=data['plakat'],
        tytul=data['tytul'],
        gatunek=data['gatunek'],
        wiek=data['wiek'],
        czas_trwania=data['czas_trwania'],
        rok_produkcji=data['rok_produkcji'],
        daty=data['daty']
    )

    db.session.add(film)
    db.session.commit()

    hours = ["11:00", "12:00", "14:00", "16:00", "20:00"]
    for hour in hours:
        seans = Seans(id_filmu=film.id, godzina=hour)
        db.session.add(seans)
        db.session.commit()

        with open('server/seats.json') as f:
            seats_data = json.load(f)
            for seat in seats_data['seats']:
                miejsce = Miejsce(
                    rzad=seat['row'],
                    numer=seat['number'],
                    czy_dostepne=seat['available'],
                    id_seansu=seans.id
                )
                db.session.add(miejsce)
        db.session.commit()

    return jsonify({"message": "Film added successfully"}), 200