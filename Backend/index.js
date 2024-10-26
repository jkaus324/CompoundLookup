const express = require('express');
const db = require('./models');
const dotenv = require('dotenv');
const compoundRoutes = require('./routes/compoundRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());

app.use('/api/compounds', compoundRoutes);

// Sync with the database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log('Error: ', err));
