const createConnection = require("../config/db"); // Update the path
const express = require('express');
const router = express.Router();
const gradesController = require('../controllers/gradesController');

// Routes
router.get('/', gradesController.view);
router.get('/add-grades', gradesController.form);
router.post('/add-grades', gradesController.create);
router.get('/edit-grades/:id', gradesController.edit);
router.post('/edit-grades/:id', gradesController.update);
router.get('/delete-grades/:id', gradesController.delete);

// Define a route for exporting grades data as CSV
router.get('/export-grades-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch grades data from the database
    const query = 'SELECT * FROM grades';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.grades_id},${row.students_id},${row.modules_id},${row.grade},${row.grade_category}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=grades.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
});


module.exports = router;
