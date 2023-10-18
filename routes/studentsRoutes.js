const express = require('express');
const createConnection = require("../config/db"); // Update the path
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// Routes
router.get('/', studentsController.view);
router.get('/add-students', studentsController.form);
router.post('/add-students', studentsController.create);
router.post('/edit-students', studentsController.update);
router.get('/edit-students/:id', studentsController.edit);
router.post('/edit-students/:id', studentsController.update);
router.get('/delete-students/:id', studentsController.delete);

// Define a route for exporting students data as CSV
router.get('/export-students-csv', (req, res) => {
    const connection = createConnection(); // Get a connection
  
    // Query to fetch students data from the database
    const query = 'SELECT * FROM students';
  
    connection.query(query, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        // Convert the result to CSV format
        const csvData = rows.map(row => {
          return `${row.students_id},${row.first_name},${row.last_name},${row.gender},${row.programs_id},${row.enrollment_year}`;
        }).join('\n');
  
        // Set response headers for CSV download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=students.csv');
  
        // Send the CSV data as the response
        res.status(200).send(csvData);
      }
  
      // Release the connection when done
      connection.end();
    });
  });
  

module.exports = router;
