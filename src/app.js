const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error Handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));