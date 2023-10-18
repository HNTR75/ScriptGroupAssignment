const createConnection = require("../config/db");

// View students
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM students', (err, rows) => {
    if (!err) {
      res.render('students', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add students
exports.form = (req, res) => {
  // Assuming you have these variables available, replace them with actual values
  const students_id = ''; // Provide the default or initial value for students_id
  const first_name = ''; // Provide the default or initial value for first_name
  const last_name = ''; // Provide the default or initial value for last_name
  const gender = ''; // Provide the default or initial value for gender
  const programs_id = ''; // Provide the default or initial value for programs_id
  const enrollment_year = ''; // Provide the default or initial value for enrollment_year

  res.render('add-students', {
    students_id,
    first_name,
    last_name,
    gender,
    programs_id,
    enrollment_year,
  });
}

// Add new students
exports.create = (req, res) => {
  const { students_id, first_name, last_name, gender, programs_id, username, password, enrollment_year } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO students (students_id, first_name, last_name, gender, programs_id, enrollment_year) VALUES (?, ?, ?, ?, ?, ?)', [students_id, first_name, last_name, gender, programs_id, enrollment_year], (err, rows) => {
    if (!err) {
      res.render('add-students', { alert: 'Student added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit students
exports.edit = (req, res) => {
  const students_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('SELECT * FROM students WHERE students_id = ?', [students_id], (err, rows) => {
    if (!err) {
      // Pass students_id and other student details to the view
      res.render('edit-students', { student: rows[0], students_id, first_name: rows[0].first_name, last_name: rows[0].last_name, gender: rows[0].gender, programs_id: rows[0].programs_id, enrollment_year: rows[0].enrollment_year });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Update students (handles the POST request)
exports.update = (req, res) => {
  const { students_id, first_name, last_name, gender, programs_id, enrollment_year } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the database
  connection.query(
    'UPDATE students SET first_name = ?, last_name = ?, gender = ?, programs_id = ?, enrollment_year = ? WHERE students_id = ?',
    [first_name, last_name, gender, programs_id, enrollment_year, students_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/students'); // Redirect to the students page after successful update
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
}

// Delete students
exports.delete = (req, res) => {
  const students_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM students WHERE students_id = ?', [students_id], (err, rows) => {
    if (!err) {
      res.redirect('/students');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
