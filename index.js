require("dotenv").config();
const fetch = require("node-fetch");
const express = require("express");
const app = express();
const apiKey = process.env.API_KEY;
app.listen(3000);

app.post("/:location", async (req, res) => {
  const { location } = req.params;
  //   getLocation(location);
  const coord = await getLocation(location);
  const quality = await getQuality(coord);
  res.send(quality);
});

async function getLocation(loc) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${apiKey}`
    );
    const body = await response.json();
    const coord = {
      lat: String(body[0].lat),
      lon: String(body[0].lon),
      name: body[0].name,
      country: body[0].country,
    };
    return coord;
  } catch (e) {
    if (e) {
      const coord = {
        lat: "not found",
        lon: "not found",
        name: "not found",
        country: "not found",
      };
      return coord
    }
  }
}

async function getQuality(loc) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${loc.lat}&lon=${loc.lon}&appid=${apiKey}`
    );
    const body = await response.json();
    const data = { airQuality: body.list[0].components, location: loc };
    return data;
  } catch (e) {
    const data = { airQuality: "no data - check location", location: loc };
    return data
  }
}
