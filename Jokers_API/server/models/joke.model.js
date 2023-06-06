const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is a required field"] ,
        minLength: [10, "Setup needs to be at least 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is a required field"],
        minLength: [3, "Punchline needs to be at least 3 characters"]
    }
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;
