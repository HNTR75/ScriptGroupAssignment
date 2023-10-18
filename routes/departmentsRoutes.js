const createConnection = require("../config/db"); // Update the path
const express = require('express');
const router = express.Router();
const departmentsController = require('../controllers/departmentsController');

// Routes
router.get('/', departmentsController.view);
router.get('/add-departments', departmentsController.form);
router.post('/add-departments', departmentsController.create);
router.post('/edit-departments', departmentsController.update);
router.get('/edit-departments/:id', departmentsController.edit);
router.post('/edit-departments/:id', departmentsController.update);
router.get('/delete-departments/:id', departmentsController.delete);

// Define a route for exporting departments data as CSV
router.get('/export-departments-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch departments data from the database
    const query = 'SELECT * FROM departments';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.departments_id},${row.departments_name}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=departments.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
});


module.exports = router;
