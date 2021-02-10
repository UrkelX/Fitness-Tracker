# Fitness-Tracker

## Description
An app that allows users to create workouts and add to existing workouts that are saved to a database. The app also generates graphs/charts based on data. This project uses dotenv, morgan, mongoose, and express. 

## Table of Contents

* [Installation](#installation)

* [Code](#code)

* [Usage](#usage)

* [Contributions](#contributions)

* [Tests](#tests)

* [License](#license)

* [Contact](#contact)

## Installation
To run app you must install:
* express
* edotenv
* morgan
* mongoose

## Code
```
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
```


## Usage

See sample here:
<img width="1413" alt="fitness1" src="https://user-images.githubusercontent.com/70240665/107450829-a7dca680-6b0b-11eb-83fb-dc76aceeee9f.png">
<img width="1412" alt="fitness2" src="https://user-images.githubusercontent.com/70240665/107450831-a8753d00-6b0b-11eb-98c2-41b48f0a0598.png">



## Contributions
Thank you for the support from my TAs, intructor, and classmates. 


## Tests
N/A

## Deployed 
[Heroku](https://lit-bastion-76217.herokuapp.com/?id=60206a8a71b9c900156f1efc)

## License
[MIT License](https://github.com/UrkelX/README_Generator/files/5646505/MIT.txt)


## Contact
GitHub: @[UrkelX](https://github.com/UrkelX)

Email: jordon@blackbirdrevolt.com
