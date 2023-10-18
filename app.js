const createConnection = require("./config/db");
const express = require('express');
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const port = 4000;
const nodemailer = require('nodemailer');

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data
app.use(express.json()); // Add other middleware as needed
app.use(express.urlencoded({ extended: true }));

//Routes

// Import and use the departmentsRoutes router
const departmentsRoutes = require('./routes/departmentsRoutes'); // Adjust the path to your router file
app.use('/departments', departmentsRoutes); // Use the router for /departments route

// Define the POST route for adding departments
app.post('/add-departments', (req, res) => {
  const { departments_id, departments_name } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the departments table
  connection.query(
    'INSERT INTO departments (departments_id, departments_name) VALUES (?, ?)',
    [departments_id, departments_name],
    (err, rows) => {
      if (!err) {
        res.redirect('/departments'); // Redirect to the departments page after successful insertion
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
});

// Define the POST route for editing departments
app.post('/edit-departments', (req, res) => {
  const { departments_name } = req.body;
  const departments_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the departments table
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
});

// Import and use the studentsRoutes router
const studentsRoutes = require('./routes/studentsRoutes'); // Adjust the path to your router file
app.use('/students', studentsRoutes); // Use the router for /students route

app.post('/add-students', (req, res) => {
  const { students_id, first_name,last_name, gender, programs_id, enrollment_year, } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the database
 connection.query('INSERT INTO students (students_id, first_name, last_name, gender, programs_id, enrollment_year) VALUES (?, ?, ?, ?, ?, ?)', [students_id, first_name, last_name, gender, programs_id, enrollment_year], (err, rows) => {
    if (!err) {
      res.redirect('/students'); // Redirect to the students page after successful insertion
    } else {
      console.log(err);
      res.status(500).send('Internal Server Error'); // Handle database error
    }
    // Release the connection when done
    connection.end();
  });
});

// Define the POST route for editing students
app.post('/edit-students', (req, res) => {
  const { first_name, last_name, gender, programs_id, enrollment_year } = req.body;
  const students_id = req.params.id; // Get the ID from the URL
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the students table
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
});


// Import and use the modulesRoutes router
const modulesRoutes = require('./routes/modulesRoutes'); // Adjust the path to your router file
app.use('/modules', modulesRoutes); // Use the router for /modules route
// Use the routers for specific paths
app.use('/modules/add-modules', modulesRoutes); // For /modules/add-modules route
app.use('/modules/edit-modules', modulesRoutes); // For /modules/edit-modules route
app.use('/modules/delete-modules', modulesRoutes); // For /modules/delete-modules route


app.post('/add-modules', (req, res) => {
  const { modules_id, modules_name, classes_id, semester, lecturers_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the database
  connection.query('INSERT INTO modules (modules_id, modules_name, lecturers_id) VALUES (?, ?, ?)', [modules_id, modules_name, lecturers_id], (err, rows) => {
    if (!err) {
      res.redirect('/modules'); // Redirect to the modules page after successful insertion
    } else {
      console.log(err);
      res.status(500).send('Internal Server Error'); // Handle database error
    }
    // Release the connection when done
    connection.end();
  });
});

// Import and use the gradesRoutes router
const gradesRoutes = require('./routes/gradesRoutes'); // Adjust the path to your router file
app.use('/grades', gradesRoutes); // Use the router for /grades route

// Define the POST route for adding grades
app.post('/add-grades', (req, res) => {
  const { students_id, modules_id, grade } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the grades table
  connection.query(
    'INSERT INTO grades (students_id, modules_id, grade) VALUES (?, ?, ?)',
    [students_id, modules_id, grade],
    (err, rows) => {
      if (!err) {
        res.redirect('/grades'); // Redirect to the grades page after successful insertion
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
});

// Define the POST route for editing grades
app.post('/edit-grades', (req, res) => {
  const { students_id, modules_id, grade } = req.body;
  const grades_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the grades table
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
});



// Import and use the programsRoutes router
const programsRoutes = require('./routes/programsRoutes'); // Adjust the path to your router file
app.use('/programs', programsRoutes); // Use the router for /programs route

// Define the POST route for adding programs
app.post('/add-programs', (req, res) => {
  const { programs_id, programs_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the programs table
  connection.query(
    'INSERT INTO programs (programs_id, programs_name, departments_id) VALUES (?, ?, ?)',
    [programs_id, programs_name, departments_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/programs'); // Redirect to the programs page after successful insertion
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
});

// Define the POST route for editing programs
app.post('/edit-programs', (req, res) => {
  const { programs_name, departments_id } = req.body;
  const programs_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the programs table
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
});

// Import and use the lecturersRoutes router
const lecturersRoutes = require('./routes/lecturersRoutes'); // Adjust the path to your router file
app.use('/lecturers', lecturersRoutes); // Use the router for /lecturers route

// Define the POST route for adding lecturers
app.post('/add-lecturers', (req, res) => {
  const { lecturers_id, first_name, last_name, departments_id } = req.body;
  const connection = createConnection(); // Get a connection

  // Use the connection to insert data into the lecturers table
  connection.query(
    'INSERT INTO lecturers (lecturers_id, first_name, last_name, departments_id) VALUES (?, ?, ?, ?)',
    [lecturers_id, first_name, last_name, departments_id],
    (err, rows) => {
      if (!err) {
        res.redirect('/lecturers'); // Redirect to the lecturers page after successful insertion
      } else {
        console.log(err);
        res.status(500).send('Internal Server Error'); // Handle database error
      }
      // Release the connection when done
      connection.end();
    }
  );
});

// Define the POST route for editing lecturers
app.post('/edit-lecturers', (req, res) => {
  const { first_name, last_name, departments_id } = req.body;
  const lecturers_id = req.params.id;
  const connection = createConnection(); // Get a connection

  // Use the connection to update data in the lecturers table
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
});

// In your app.js or a separate routes file, add a new route to fetch student counts by program
app.get('/student-count-by-program', (req, res) => {
  const connection = createConnection(); // Get a connection

  const query = `
    SELECT programs.programs_name, COUNT(students.students_id) AS studentCount
    FROM programs
    LEFT JOIN students ON programs.programs_id = students.programs_id
    GROUP BY programs.programs_name
    ORDER BY programs.programs_name
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      const labels = results.map((row) => row.programs_name);
      const data = results.map((row) => row.studentCount);

      res.json({ labels, data });
    }

    // Release the connection when done
    connection.end();
  });
});

// In your app.js or a separate routes file, add a new route to fetch grade distribution data
app.get('/grade-distribution', (req, res) => {
  const connection = createConnection(); // Get a connection

  const query = `
    SELECT grade_category, COUNT(*) AS gradeCount
    FROM grades
    GROUP BY grade_category
    ORDER BY grade_category
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }

    // Release the connection when done
    connection.end();
  });
});

// Add a new route to fetch the top-performing students
app.get('/top-performing-students', (req, res) => {
  const connection = createConnection(); // Get a connection

  const query = `
    SELECT students.students_id, students.first_name, students.last_name, AVG(grades.grade) AS average_grade
    FROM students
    JOIN grades ON students.students_id = grades.students_id
    GROUP BY students.students_id, students.first_name, students.last_name
    ORDER BY average_grade DESC
    LIMIT 5; -- Change the limit to the number of top-performing students you want to display
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }

    // Release the connection when done
    connection.end();
  });
});

// Add a new route to fetch gender distribution
app.get('/gender-distribution', (req, res) => {
  const connection = createConnection(); // Get a connection

  const query = `
    SELECT gender, COUNT(*) AS count
    FROM students
    GROUP BY gender;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      // Process the results and create a JSON object
      const genderDistribution = {};
      results.forEach((row) => {
        genderDistribution[row.gender] = row.count;
      });

      // Send the gender distribution data as JSON response
      res.json(genderDistribution);
    }

    // Release the connection when done
    connection.end();
  });
});

const mailRoutes = require('./routes/mailRoutes');
app.use('/send-mail', mailRoutes); // Ensure this path matches your route in email.js


// Define a route to handle sending emails
// Define the route to handle email sending
app.post('/send-mail', (req, res) => {
  const recipient = req.body.recipient; // Change 'recipient' to 'to'
  const subject = req.body.subject;
  const message = req.body.message; // Change 'message' to 'text'

  const smtpTransport = {
    service: 'Gmail',
    auth: {
      user: 'pyromianhunter@gmail.com', // Update with your Gmail credentials
      pass: 'xxkx axpt gshc kmmi', // Update with your Gmail password
    },
  };

  const transporter = nodemailer.createTransport(smtpTransport);

  const mailOptions = {
    from: 'pyromianhunter@gmail.com',
    to: recipient,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Email not sent. Error Occurs.');
    } else {
      console.log('Email sent successfully');
      res.redirect('/');
    }
  });
});




// Define routes for other pages
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/modules', (req, res) => {
  res.render('modules');
});

app.get('/programs', (req, res) => {
  res.render('programs');
});

app.get('/departments', (req, res) => {
  res.render('departments');
});

app.get('/students', (req, res) => {
  res.render('students');
});

app.get('/lecturers', (req, res) => {
  res.render('lecturers');
});

app.get('/grades', (req, res) => {
  res.render('grades');
});

app.get('/send-mail', (req, res) => {
  res.render('send-mail');
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
