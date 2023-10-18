const createConnection = require("../config/db");

// View lecturers
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM lecturers', (err, rows) => {
    if (!err) {
      res.render('lecturers', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add lecturers
exports.form = (req, res) => {
  // Assuming you have these variables available, replace them with actual values
  const lecturers_id = ''; // Provide the default or initial value for lecturers_id
  const first_name = ''; // Provide the default or initial value for first_name
  const last_name = ''; // Provide the default or initial value for last_name
  const departments_id = ''; // Provide the default or initial value for departments_id
  
  res.render('add-lecturers', {
    lecturers_id,
    first_name,
    last_name,
    departments_id,
  });
}

// Add new lecturers
exports.create = (req, res) => {
  const { lecturers_id, first_name, last_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO lecturers (lecturers_id, first_name, last_name, departments_id) VALUES (?, ?, ?, ?)', [lecturers_id, first_name, last_name, departments_id], (err, rows) => {
    if (!err) {
      res.render('add-lecturers', { alert: 'Lecturer added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit lecturers
exports.edit = (req, res) => {
  const lecturers_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('SELECT * FROM lecturers WHERE lecturers_id = ?', [lecturers_id], (err, rows) => {
    if (!err) {
      // Pass lecturers_id and other lecturer details to the view
      res.render('edit-lecturers', { lecturer: rows[0], lecturers_id, first_name: rows[0].first_name, last_name: rows[0].last_name, departments_id: rows[0].departments_id });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Update lecturers (handles the POST request)
exports.update = (req, res) => {
  const { lecturers_id, first_name, last_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the database
  connection.query(
    'UPDATE lecturers SET first_name = ?, last_name = ?, departments_id = ? WHERE lecturers_id = ?',
    [first_name, last_name, departments_id, lecturers_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/lecturers'); // Redirect to the lecturers page after successful update
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
}

// Delete lecturers
exports.delete = (req, res) => {
  const lecturers_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM lecturers WHERE lecturers_id = ?', [lecturers_id], (err, rows) => {
    if (!err) {
      res.redirect('/lecturers');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
