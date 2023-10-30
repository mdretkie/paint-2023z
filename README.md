# Jak uruchomić:

## Backend:

1. Tworzymy środowisko wirtualne:

```
cd server

python3 -m venv venv
```

2. Aktywujemy środowisko wirtualne:

- Windows:

```
venv\Scripts\activate
```

- Linux lub macOS:

```
source venv/bin/activate
```

3. **Tylko przy pierwszym uruchomieniu.** Instalujemy flaska i flask-cors:
```
pip3 install flask
pip3 install flask-cors
```

4. Startujemy serwer:
```
python3 server.py
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