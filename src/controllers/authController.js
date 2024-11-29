const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await registerUser(username, email, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await loginUser(email, password);
    res.status(200).json({ message: 'Login successful', ...data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };