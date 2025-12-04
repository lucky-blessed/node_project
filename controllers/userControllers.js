const { readData, writeData } = require('../utils/file.js');


async function createUser(req, res) {
    try {
        // Step 1: Read the file
        const data = await readData();

        // Step 2: Create logic to auto increment id
        const lastUser = data.users[data.users.length - 1];

        const nextUser = lastUser ? lastUser.id + 1 : 0;
        
        // Step 3: Create new user object
        const newUser = {
            id: nextUser,
            first_name: req.body.first_name,
            username: req.body.username,
            email: req.body.email
        }

        // Step 4: Push new user to data.users array
        data.user.push(newUser);

        //Stem 5: Write the data object to the file
        await writeData(data);

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        res.status(500).send(`Internal Server Error: ${error.message}`);
        
    }
}

module.exports = { createUser };