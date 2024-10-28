const { User } = require('../models');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        console.log(req.body.username);
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        // Check if user exists and verify the password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        console.log('Login successful');
        res.json({ message: 'Login successful', signedIn:true });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login. Please try again later.' });
    }
};

const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        
        // Check if username already exists
        const user = await User.findOne({ where: { username } });
        if (user) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create the new user with the hashed password
        const newUser = await User.create({ username, password: hashedPassword, email });
        res.json({ message: 'Registration successful', signedIn:true });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'An error occurred during registration. Please try again later.' });
    }
};

module.exports = { login, register };
