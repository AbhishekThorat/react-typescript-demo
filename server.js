const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

app.use(cors())

const data = [{
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
    "title": "Man's Not Hot",
    "artist": "Big Shaq",
  },
  {
    "thumbnail": "http://ichef.live.bbci.co.uk/images/ic/240x240/p05d9k7g.jpg",
    "title": "Havana (feat. Young Thug)",
    "artist": "Camila Cabello",
  }];

app.get("/playlist", (req, res) => {
  res.send(data);
})
app.listen(8081);
