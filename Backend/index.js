const express = require('express');
const db = require('./models');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const compoundRoutes = require('./routes/compoundRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/api/compounds', compoundRoutes);
app.use('/api/auth', authRoutes);

// Sync with the database
db.sequelize.sync({ alter: true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ', err));


