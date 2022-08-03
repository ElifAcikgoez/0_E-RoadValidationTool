const express = require('express');
const router = express.Router();
const Data = require('./models/data');
// get all data
router.get('/data', async(req, res) => {
  const allData = await Data.find();
  console.log(allData);
  res.send(allData);
});
// post one member
router.post('/data', async(req, res) => {
  const newData = new Data({
    achse: req.body.achse,
    schadstoffklasse: req.body.schadstoffklasse,
    gewichtsklasse: req.body.gewichtsklasse,
    dieselverbrauch: req.body.dieselverbrauch,
    start: req.body.start,
    ziel: req.body.ziel,
    streckenlaenge: req.body.streckenlaenge
  })
  await newData.save();
  res.send(newData);
});
// post one data via id
router.get('/data/:id', async(req, res) => {
  try {
    const data = await Data.findOne({ _id: req.params.id });
    console.log(req.params);
    res.send(data);
  } catch {
    res.status(404);
    res.send({
      error: "Data does not exist!"
    });
  }
})
// update one data
router.patch('/data/:id', async(req, res) => {
  try {
    const data = await Data.findOne({ _id: req.params.id })

    if (req.body.achse) {
      data.achse = req.body.achse
    }

    if (req.body.schadstoffklasse) {
      data.schadstoffklasse = req.body.schadstoffklasse
    }

    if (req.body.gewichtsklasse) {
      data.gewichtsklasse = req.body.gewichtsklasse
    }
    if (req.body.dieselverbrauch) {
      data.dieselverbrauch = req.body.dieselverbrauch
    }
    if (req.body.start) {
      data.start = req.body.dieselverbrauch
    }
    if (req.body.ziel) {
      data.ziel = req.body.ziel
    }
    if (req.body.streckenlaenge) {
      data.streckenlaenge = req.body.streckenlaenge}


    await Data.updateOne({ _id: req.params.id }, data);
    res.send(data)
  } catch {
    res.status(404)
    res.send({ error: "Data does not exist!" })
  }
});
// delete one data via id
router.delete('/data/:id', async(req, res) => {
  try {
    await Data.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Data does not exist!" })
  }
});
module.exports = router;
