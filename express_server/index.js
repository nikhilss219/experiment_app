// index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on http://172.16.46.78:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

const User = require('./models/User');
User.sync();