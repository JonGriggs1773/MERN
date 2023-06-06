const Joke = require("../models/joke.model");


module.exports.getAllJokes = (req, res) => {
    Joke.find()
    .then((allDaJokes) => {
        res.json({jokes: allDaJokes})
    })
    .catch((err) => {
        red.json({message: "Something went wrong-----", error: err})
    })
}

module.exports.getOneJokeById = (req, res) => {
    Joke.find({_id: req.params.id})
    .then(oneJoke => {
        res.json({joke: oneJoke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong-----", error: err})
    })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => {
        res.json({joke: new Joke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong-----", error: err})
    })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedJoke => {
        res.json({joke: updatedJoke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong-----", error: err})
    })
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "SOmething went wrong-----", error: err})
    })
}