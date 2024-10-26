require('dotenv').config();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Compound } = require('../models'); // Adjust the path if needed
const db = require('../models'); // Import the database connection

async function importCsvData(filePath) {
  try {
    await db.sequelize.sync(); // Ensure the database is ready

    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // Map CSV columns to your model fields
        results.push({
          id: parseInt(row.id, 10),
          name: row.compoundname,                   // Assuming `name` maps to `compoundname`
          description: row.compounddescription,     // Assuming `description` maps to `compounddescription`
          imageSource: row.strImageSource,          // Adjust if your model has a similar field
          imageAttribution: row.strImageAttribution,// Adjust if your model has a similar field
          dateModified: row.datemodified            // Adjust if your model has a similar field
        });
      })
      .on('end', async () => {
        try {
          await Compound.bulkCreate(results, { ignoreDuplicates: true });
          console.log('Data imported successfully!');
          process.exit(0); // Exit the process after completion
        } catch (error) {
          console.error('Error inserting data:', error);
          process.exit(1); // Exit with an error code
        }
      });
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

// Specify the path to your CSV file
const csvFilePath = path.join(__dirname, 'compound.csv'); // Place 'compound.csv' in the scripts folder or adjust the path

importCsvData(csvFilePath);
