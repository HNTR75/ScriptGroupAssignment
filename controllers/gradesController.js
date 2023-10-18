// gradesController.js
const createConnection = require("../config/db");

// View grades
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM grades', (err, rows) => {
    if (!err) {
      res.render('grades', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add grades
exports.form = (req, res) => {
  // Assuming you have these variables available, replace them with actual values
  const students_id = ''; // Provide the default or initial value for students_id
  const modules_id = ''; // Provide the default or initial value for modules_id
  const grade = ''; // Provide the default or initial value for grade
  
  res.render('add-grades', {
    students_id,
    modules_id,
    grade,
  });
}

// Add new grade
exports.create = (req, res) => {
  const { students_id, modules_id, grade } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO grades (students_id, modules_id, grade) VALUES (?, ?, ?)', [students_id, modules_id, grade], (err, rows) => {
    if (!err) {
      res.render('add-grades', { alert: 'Grade added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit grade
exports.edit = (req, res) => {
    const grades_id = req.params.id;
    const connection = createConnection(); // Get a connection
  
    // Use the connection
    connection.query('SELECT * FROM grades WHERE grades_id = ?', [grades_id], (err, rows) => {
      if (!err) {
        if (rows.length === 0) {
          res.status(404).send('Grade not found');
        } else {
          // Pass the grade object to the view
          res.render('edit-grades', {
            grade: rows[0], // Pass the grade object
            grades_id,
            students_id: rows[0].students_id,
            modules_id: rows[0].modules_id,
            grade: rows[0].grade
          });
        }
      } else {
        console.log(err);
      }
      // Release the connection when done
      connection.end();
    });
  }
  
// Update grade (handles the POST request)
exports.update = (req, res) => {
  const { students_id, modules_id, grade } = req.body;
  const grades_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the database
  connection.query(
    'UPDATE grades SET students_id = ?, modules_id = ?, grade = ? WHERE grades_id = ?',
    [students_id, modules_id, grade, grades_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/grades'); // Redirect to the grades page after successful update
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
}

// Delete grade
exports.delete = (req, res) => {
  const grades_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM grades WHERE grades_id = ?', [grades_id], (err, rows) => {
    if (!err) {
      res.redirect('/grades');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
