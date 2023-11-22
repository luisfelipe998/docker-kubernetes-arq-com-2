const Handler = require('./handler');
const userRepoMongo = require('./userRepoMongo');
const userRepoInMemory = require('./userRepoInMemory');
const hash = require('./hash');

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const handler = process.env.USE_IN_MEMORY_DB !== "true" ? Handler(userRepoMongo, hash) : Handler(userRepoInMemory, hash);

app.use(express.json());
app.post("/register", logger('/register'), handler.register);
app.post("/login", logger('/login'), handler.login);

app.listen(port, async () => {
    if (process.env.USE_IN_MEMORY_DB !== "true") {
        console.log('starting mongodb...')
        await userRepoMongo.connect();
    }
    console.log(`App running on port ${port}`);
});

function logger(endpoint) {
    return (req, res, next) => {
        console.log(`called ${endpoint}`);
        next();
    }
}
