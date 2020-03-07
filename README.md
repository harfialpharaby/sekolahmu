# sekolahmu

Software engineering test for Sekolahmu

## How to make it work locally?

### First thing to do

1. **Clone this repo**

### Server Side

1. Go to folder **server**
2. Rename file `.env_template` with `.env` and fill secret key with anything, for example

```
SECRET_KEY=backend-sekolahmu
```

You can change `backend-sekolahmu` with any value you want.

3. Run this commands one by one

```
npm install
sequelize db:migrate
npm start
```

3. Server is ready when npm start is done executing and you can check the server on `http://localhost:3000`

### Client Side

1. Go to folder **client** and run this commands one by one

```
npm install
npm run serve
```

2. Client is ready when npm run serve is done executing and you can open web on `http://localhost:8080`
