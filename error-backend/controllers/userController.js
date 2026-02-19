const getUsers = (req, res) => {
    const unusedVar = 'I am never used';

    res.json(users);
};

const addUser = (req, res) => {
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email
    };

    res.status(201).json({ message: 'User added', user: newUser });
};

module.exports = { getUsers, addUser };
