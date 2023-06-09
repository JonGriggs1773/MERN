const JokeController = require('../controllers/joke.controller');


module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getOneJokeById);
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.post('/api/jokes', JokeController.createJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
}