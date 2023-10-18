const createConnection = require("../config/db"); // Update the path
const express = require('express');
const router = express.Router();
const lecturersController = require('../controllers/lecturersController');

// Routes
router.get('/', lecturersController.view);
router.get('/add-lecturers', lecturersController.form);
router.post('/add-lecturers', lecturersController.create);
router.post('/edit-lecturers', lecturersController.update);
router.get('/edit-lecturers/:id', lecturersController.edit);
router.post('/edit-lecturers/:id', lecturersController.update);
router.get('/delete-lecturers/:id', lecturersController.delete);

// Define a route for exporting lecturers data as CSV
router.get('/export-lecturers-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch lecturers data from the database
    const query = 'SELECT * FROM lecturers';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.lecturers_id},${row.first_name},${row.last_name},${row.departments_id}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=lecturers.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
});


module.exports = router;
