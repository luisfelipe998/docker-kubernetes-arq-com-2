
function Handler(userRepo, hash) {
    this.userRepo = userRepo;
    this.hash = hash;

    async function register(req, res) {
        if (req.body.username == null || req.body.username == undefined) {
            return res.status(400).send({ error: "'username' must be defined" });
        }
        if (req.body.password == null || req.body.password == undefined) {
            return res.status(400).send({ error: "'password' must be defined" });
        }
        const user = await userRepo.findByUsername(req.body.username);
        if (user) {
            return res.status(409).send({ error: "user already exists" });
        }
    
        const userToSave = {
            username: req.body.username,
            password: hash.digest(req.body.password)
        };
        await userRepo.save(userToSave);
        
        res.status(201).send({
            hash: userToSave.password,
        });
    }

    async function login(req, res) {
        if (req.body.username == null || req.body.username == undefined) {
            return res.status(400).send({ error: "'username' must be defined" });
        }
        if (req.body.password == null || req.body.password == undefined) {
            return res.status(400).send({ error: "'password' must be defined" });
        }
    
        const user = await userRepo.findByUsername(req.body.username);
        if (!user) {
            return res.status(404).send({ error: `user '${req.body.username}' not found` });
        }
    
        if (user.password !== hash.digest(req.body.password)) {
            return res.status(401).send({ error: `password doesn't match` });
        }
    
        return res.send({
            ok: true,
            message: `user '${req.body.username}' logged in.`
        });
    }

    return {
        register,
        login
    }
}

module.exports = Handler;