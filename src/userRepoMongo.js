const { MongoClient } = require('mongodb');
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

const userCollection = "users";
let db = null;

module.exports = {
    async connect() {
        const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
        const client = new MongoClient(url);
        await client.connect()
        db = client.db(DB_NAME);
    },

    async save(user) {
        try {
            console.log('saving user in mongodb...')
            await db.collection(userCollection).insertOne(user);
        } catch (e) {
            console.error(e);
        }
    },

    async findByUsername(username) {
        try {
            console.log('finding user in mongodb...')
            return await db.collection(userCollection).findOne({ username });
        } catch (e) {
            console.error(e);
        }
    }
}