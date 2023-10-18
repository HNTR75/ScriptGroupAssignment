const createConnection = require("../config/db");

// View programs
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM programs', (err, rows) => {
    if (!err) {
      res.render('programs', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add programs
exports.form = (req, res) => {
  // Assuming you have these variables available, replace them with actual values
  const programs_id = ''; // Provide the default or initial value for programs_id
  const programs_name = ''; // Provide the default or initial value for programs_name
  const departments_id = ''; // Provide the default or initial value for departments_id

  res.render('add-programs', {
    programs_id,
    programs_name,
    departments_id,
  });
}

// Add new programs
exports.create = (req, res) => {
  const { programs_id, programs_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO programs (programs_id, programs_name, departments_id) VALUES (?, ?, ?)', [programs_id, programs_name, departments_id], (err, rows) => {
    if (!err) {
      res.render('add-programs', { alert: 'Program added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit programs
exports.edit = (req, res) => {
  const programs_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('SELECT * FROM programs WHERE programs_id = ?', [programs_id], (err, rows) => {
    if (!err) {
      // Pass programs_id and other program details to the view
      res.render('edit-programs', { program: rows[0], programs_id, programs_name: rows[0].programs_name, departments_id: rows[0].departments_id });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Update programs (handles the POST request)
exports.update = (req, res) => {
  const { programs_id, programs_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the database
  connection.query(
    'UPDATE programs SET programs_name = ?, departments_id = ? WHERE programs_id = ?',
    [programs_name, departments_id, programs_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/programs'); // Redirect to the programs page after successful update
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
}

// Delete programs
exports.delete = (req, res) => {
  const programs_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM programs WHERE programs_id = ?', [programs_id], (err, rows) => {
    if (!err) {
      res.redirect('/programs');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
