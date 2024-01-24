import argparse
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from paint.server.common import Bilet, User, Film

def displayDatabase(model):
    engine = create_engine('sqlite:///../instance/example.db')
    Session = sessionmaker(bind=engine)
    session = Session()

    if model == 'Bilet':
        items = session.query(Bilet).all()
    elif model == 'User':
        items = session.query(User).all()
    elif model == 'Film':
        items = session.query(Film).all()
    else:
        print(f"Nieznany model: {model}")
        return

    for item in items:
        print(item.to_dict())

    session.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Wyświetl zawartość bazy danych.')
    parser.add_argument('model', type=str, help='Model do wyświetlenia (Bilet, User, Film)')
    args = parser.parse_args()

    displayDatabase(args.model)
