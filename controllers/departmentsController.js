const createConnection = require("../config/db");

// View departments
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM departments', (err, rows) => {
    if (!err) {
      res.render('departments', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add departments
exports.form = (req, res) => {
  // Assuming you have these variables available, replace them with actual values
  const departments_id = ''; // Provide the default or initial value for departments_id
  const departments_name = ''; // Provide the default or initial value for departments_name
  
  res.render('add-departments', {
    departments_id,
    departments_name,
  });
}

// Add new departments
exports.create = (req, res) => {
  const { departments_id, departments_name } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO departments (departments_id, departments_name) VALUES (?, ?)', [departments_id, departments_name], (err, rows) => {
    if (!err) {
      res.render('add-departments', { alert: 'Department added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit departments
exports.edit = (req, res) => {
  const departments_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('SELECT * FROM departments WHERE departments_id = ?', [departments_id], (err, rows) => {
    if (!err) {
      // Pass departments data to the view
      res.render('edit-departments', { departments_id, departments_name: rows[0].departments_name });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}


// Update departments (handles the POST request)
exports.update = (req, res) => {
  const { departments_id, departments_name } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the database
  connection.query(
    'UPDATE departments SET departments_name = ? WHERE departments_id = ?',
    [departments_name, departments_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/departments'); // Redirect to the departments page after successful update
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
}

// Delete departments
exports.delete = (req, res) => {
  const departments_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM departments WHERE departments_id = ?', [departments_id], (err, rows) => {
    if (!err) {
      res.redirect('/departments');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
