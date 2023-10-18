const express = require('express');
const router = express.Router();
const modulesController = require('../controllers/modulesController');
const createConnection = require("../config/db");

// Routes
router.get('/', modulesController.view);
router.get('/add-modules', modulesController.form);
router.post('/add-modules', modulesController.create);
router.post('/edit-modules', modulesController.update);
router.get('/edit-modules/:id', modulesController.edit);
router.post('/edit-modules/:id', modulesController.update);
router.get('/delete-modules/:id', modulesController.delete);

// Define a route for exporting modules data as CSV
router.get('/export-modules-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch modules data from the database
    const query = 'SELECT * FROM modules';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.modules_id},${row.modules_name},${row.lecturers_id}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=modules.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
  });

module.exports = router;
