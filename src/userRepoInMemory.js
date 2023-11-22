
const users = [];

module.exports = {
    async save(user) {
        console.log('saving user in memory...')
        users.push(user);
    },

    async findByUsername(username) {
        console.log('finding user in in memory...')
        return users.find((user) => user.username === username);
    }
}