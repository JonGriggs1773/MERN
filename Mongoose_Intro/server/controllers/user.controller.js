const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
    .then((allDaUsers) => {
        res.json({users: allDaUsers})
    })
    .catch((err) => {
        res.json({message: "Something went wrong------------------------------", error: err})
    })
}

module.exports.findUserById = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(oneSingleUser => {
        res.json({user: oneSingleUser})
    })
    .catch((err) => {
        res.json({message: "Something went wrong------------------------------", error: err})
    })
}

module.exports.createUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.json({user: new User})
    })
    .catch((err) => {
        res.json({message: "Something went wrong------------------------------", error: err})
    })
}

module.exports.updateUser = (req,res) => {
    User.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedUser => {
        res.json({user: updatedUser})
    })
    .catch((err) => {
        res.json({message: "Something went wrong-------------------------------", error: err})
    })
}

module.exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong-------------------------------", error: err})
    })
}