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
        print(f"ID:{bilet.id},Rodzaj_biletu:{bilet.rodzaj_biletu},Imię:{bilet.imie},Nazwisko:{bilet.nazwisko},Email:{bilet.email},Telefon:{bilet.telefon}")
    
    session.close()


if __name__=="__main__":
    displayDatabase()