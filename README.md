### Air Quality API

This app is serving as an API for the [Air Quality Website](https://github.com/iustinionita/air-quality-web "Air Quality Website").

All the data is taken from **OpenWeather API**, so in other words, this app will only filter the data from their API and will forward it to Air Quality Website. This was just an exercise to see how `NodeJS` and `ExpressJS` is working.

`.env` file must contain the OpenWeather API *key*, so please set it up before using the app.

#### Docker file

This app can be used with Docker by running the following command:
```shell
docker run -itd --name api -p 4000:4000 iustin23/air-quality-api /bin/bash -c "npm install; node index.js"
```

You can test the API in **Postman** using the following endpoint: {docker-container-ip}:4000/{location}

*Example:* http://192.168.0.100:4000/Bristol
