const express = require('express');
const db = require('./models');
const compoundRoutes = require('./routes/compoundRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_HOST:", process.env.DB_HOST);

app.use(express.json());

app.use('/api/compounds', compoundRoutes);

// Sync with the database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log('Error: ', err));
