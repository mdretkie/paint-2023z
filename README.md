# Jak uruchomić:

## Pobranie repozytorium:
```
git clone https://github.com/mdretkie/paint-2023z.git
```
## Backend:
Zakładamy, że znajdujemy się w głównym katalogu repozytorium (`paint-2023z`). Tworzymy i aktywujemy środowisko wirtualne

### Windows

```
python -m venv .venv
.venv\Scripts\activate.bat
pip3 install -e .
```

### Linux

```
python -m venv .venv
. .venv/bin/activate
pip install -e .
```

### Instalacja biblioteki dla bazy danych:
```
pip install Flask-SQLAlchemy
```

### Proces uruchomienia:
Uruchomienie aplikacji serwera (zakładając, że jesteśmy w katalogu `paint-2023z/server`) - pierwszy terminal:
```
python server.py
```
Wyświetlenie zawartości bazy danych (zakładając, że jesteśmy w katalogu `paint-2023z/server`) - drugi terminal:
```
python sql.py [ Bilet | Film | User ]
```


## Frontend
1. Żeby uruchomić potrzebny będzie Node.js. Można go pobrać tutaj: [Node.js](https://nodejs.org/en)

2. Przechodzimy do katalogu *Client* i instalujemy pakiety:
```
cd client
npm install
```

3. Uruchamiamy serwer klienta (zakładając, że jesteśmy w katalogu `paint-2023z/client`) - trzeci terminal:
```
npm run dev
```
