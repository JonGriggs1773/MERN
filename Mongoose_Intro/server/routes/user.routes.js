const UserController = require('../controllers/user.controller');


//* Ask about the order in which these routes should be placed
//? The order below is correct, but completely sure as to why
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findUserById);
    app.patch('/api/users/:id', UserController.updateUser);
    app.post('/api/users', UserController.createUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}