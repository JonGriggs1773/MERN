const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    age: {
        type: Number
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

//! Mongoose Notes
//* Must require mongoose at the top of ay file that utilizes the mongoose technology

//? mongoose.model()
/*
The mongoose.model() method is the most important in this case. 
Its job is to take a blueprint object and, in turn, create the 
necessary database collection out of the model.
*/


//? mongoose.Schema()
/* 
Notice how the mongoose.Schema() method takes an object as its
parameter? The structure of that object is how each new document
put into the collection will be formatted.
*/