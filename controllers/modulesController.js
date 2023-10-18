const createConnection = require("../config/db");

// View modules
exports.view = (req, res) => {
  const connection = createConnection(); // Get a connection
  // Use the connection
  connection.query('SELECT * FROM modules', (err, rows) => {
    if (!err) {
      res.render('modules', { rows });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Form to Add modules
exports.form = (req, res) => {
    // Assuming you have these variables available, replace them with actual values
    const modules_id = ''; // Provide the default or initial value for modules_id
    const modules_name = ''; // Provide the default or initial value for modules_name
    const lecturers_id = ''; // Provide the default or initial value for lecturers_id
  
    res.render('add-modules', {
      modules_id,
      modules_name,
      lecturers_id,
    });
  }
  

// Add new modules
exports.create = (req, res) => {
  const { modules_id, modules_name, classes_id, semester, lecturers_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('INSERT INTO modules (modules_id, modules_name, lecturers_id) VALUES (?, ?, ?)', [modules_id, modules_name, lecturers_id], (err, rows) => {
    if (!err) {
      res.render('add-modules', { alert: 'Module added successfully.' });
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}

// Edit modules
exports.edit = (req, res) => {
    const modules_id = req.params.id;
    const connection = createConnection(); // Get a connection
  
    // Use the connection
    connection.query('SELECT * FROM modules WHERE modules_id = ?', [modules_id], (err, rows) => {
      if (!err) {
        // Pass modules_id and modules_name to the view
        res.render('edit-modules', { modules: rows[0], modules_id, modules_name: rows[0].modules_name, lecturers_id: rows[0].lecturers_id});
      } else {
        console.log(err);
      }
      // Release the connection when done
      connection.end();
    });
  }
  

// Update modules (handles the POST request)
exports.update = (req, res) => {
    const { modules_id, modules_name, lecturers_id } = req.body;
    const connection = createConnection(); // Get a connection
  
    // Use the connection to update data in the database
    connection.query(
      'UPDATE modules SET modules_name = ?, lecturers_id = ? WHERE modules_id = ?',
      [modules_name, lecturers_id, modules_id],
      (err, rows) => {
        if (!err) {
          res.redirect('/modules'); // Redirect to the modules page after successful update
        } else {
          console.log(err);
          res.status(500).send('Internal Server Error'); // Handle database error
        }
        // Release the connection when done
        connection.end();
      }
    );
  }

  
// Delete modules
exports.delete = (req, res) => {
  const modules_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection
  connection.query('DELETE FROM modules WHERE modules_id = ?', [modules_id], (err, rows) => {
    if (!err) {
      res.redirect('modules');
    } else {
      console.log(err);
    }
    // Release the connection when done
    connection.end();
  });
}
