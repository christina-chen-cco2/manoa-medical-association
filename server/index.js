const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/physician-signup', (req, res) => {
  const client = new MongoClient(process.env.URL);

  client.connect(() => {
    const db = client.db('manoa-medical-association');
    db.collection('users')
      .insertOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        npi: req.body.npi,
        email: req.body.email,
        password: req.body.password,
        token: jwt.sign(req.body, process.env.SECRET, { expiresIn: '1800s' })
      });
    client.close();
  });

  res.send({ message: "SUCCESS" });
});

app.listen(process.env.PORT);
