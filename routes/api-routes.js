const Workout = require("../models/workout");

module.exports = function (app) {
  app.get("/api/workouts/", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(304);
      });
  });

  app.post("/api/workouts/", (req, res) => {
    Workout.create({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    let content = req.body;
    Workout.findByIdAndUpdate(
      id,
      { $push: { exercises: content } },
      { new: true }
    )
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(304);
      });
  });

  app.get("/favicon.ico", (req, res) => {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(304);
      });
  });

};
