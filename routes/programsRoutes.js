const createConnection = require("../config/db"); // Update the path
const express = require('express');
const router = express.Router();
const programsController = require('../controllers/programsController');

// Routes
router.get('/', programsController.view);
router.get('/add-programs', programsController.form);
router.post('/add-programs', programsController.create);
router.post('/edit-programs', programsController.update);
router.get('/edit-programs/:id', programsController.edit);
router.post('/edit-programs/:id', programsController.update);
router.get('/delete-programs/:id', programsController.delete);

// Define a route for exporting programs data as CSV
router.get('/export-programs-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch programs data from the database
    const query = 'SELECT * FROM programs';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.programs_id},${row.programs_name},${row.departments_id}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=programs.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
});


module.exports = router;
