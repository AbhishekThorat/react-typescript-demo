const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

app.use(cors())

const data = [
  {
    "thumbnail": "https://ichef.bbci.co.uk/images/ic/512x512/p05llcrx.jpg",
    "title": "Sahara (feat. Iggy Pop)",
    "artist": "Songhoy Blues"
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "Man's Not Hot",
    "artist": "Big Shaq",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "Havana (feat. Young Thug)",
    "artist": "Camila Cabello",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 1",
    "artist": "temp artist 1",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 2",
    "artist": "temp artist 2",
  },
  {
    "thumbnail": "https://ichef.bbci.co.uk/images/ic/512x512/p05llcrx.jpg",
    "title": "temp title 3",
    "artist": "temp artist 3",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 4",
    "artist": "temp artist 4",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 5",
    "artist": "temp artist 5",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 6",
    "artist": "temp artist 6",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 7",
    "artist": "temp artist 7",
  },
  {
    "thumbnail": "https://ichef.bbci.co.uk/images/ic/512x512/p05llcrx.jpg",
    "title": "temp title 8",
    "artist": "temp artist 8",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 9",
    "artist": "temp artist 9",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 10",
    "artist": "temp artist 10",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 11",
    "artist": "temp artist 11",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 12",
    "artist": "temp artist 12",
  },
  {
    "thumbnail": "https://ichef.bbci.co.uk/images/ic/512x512/p05llcrx.jpg",
    "title": "temp title 13",
    "artist": "temp artist 13",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 14",
    "artist": "temp artist 14",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 15",
    "artist": "temp artist 15",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05j1nmp.jpg",
    "title": "temp title 16",
    "artist": "temp artist 16",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "temp title 17",
    "artist": "temp artist 17",
  }
];

app.get("/playlist", (req, res) => {
  res.send(data);
})
app.listen(8081);
