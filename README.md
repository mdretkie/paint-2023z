# Jak uruchomić:

## Backend:

Zakładamy, że znajdujemy się w głównym katalogu repozytorium (`paint-2023z`). Tworzymy i aktywujemy środowisko wirtualne, instalujemy nasz projekt a następnie uruchamiamy.

### Windows

```
python -m venv .venv
.venv\Scripts\activate.bat
pip3 install -e .
python3 server\server.py
```

### Linux

```
python -m venv .venv
. .venv/bin/activate
pip install -e .
python server/server.py
```


## Frontend
1. Żeby uruchomić potrzebny będzie Node.js. Można go pobrać tutaj: [Node.js](https://nodejs.org/en)

2. Przechodzimy do katalogu *Client* i instalujemy pakiety:
```
cd Client
npm install
```

3. Uruchamiamy serwer klienta:
```
npm run dev
```
## Bazy danych
Pobranie niezbędnej biblioteki:
```
pip install Flask-SQLAlchemy
```
Wyświetlenie zawartości bazy danych (zakładając, że jesteśmy w katalogu `paint-2023z/server`):
```
python sql.py
```
# Dokumentacja:

Link do Overleafa, jeśli nie chcemy trzymać dokumentacji w repo:  
https://www.overleaf.com/6521975788xjpkypgnsvrh#6bb9ef
