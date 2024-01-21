from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from paint.server.common import Bilet


def displayDatabase():
    engine = create_engine('sqlite:///../instance/example.db')
    Session = sessionmaker(bind=engine)
    session = Session()
    bilety = session.query(Bilet).all()

    for bilet in bilety:
        print(f"ID:{bilet.id},Tytul_filmu:{bilet.tytul_filmu},Data:{bilet.data},Godzina:{bilet.godzina},Miejsce:{bilet.miejsce},Rodzaj_biletu:{bilet.rodzaj_biletu},User_ID:{bilet.user_id}")

    session.close()


if __name__ == "__main__":
    displayDatabase()
