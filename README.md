# Dockerized NodeJS App + MongoDB

This is a dockerized NodeJs application conected to mongo database. This template alows for quick prototyping and development, since the application is dokcerized all we need to start it is to have docker and run a single command.

Node application along with the database can be build locally using the follwoign command.
```
docker-compose up --build
```

Application will be available at `http://localhost:3000/`

Application can alos be started without use of docker for development purpuses with the following commands.

```
cd backend
npm install
npm start
```

Application will be available at `http://localhost:3000/`
