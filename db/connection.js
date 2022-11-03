const mysql = require('mysql2');
const ctable = require('console.table')

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  

// employee
const allEmployees = () => {
      db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
      });
}

// department
const allDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

// role
const allRoles = () => {
    db.query('SELECT * FROM role', function (err, results) {
      console.table(results);
    });
}

const wrap = {allEmployees,allRoles,allDepartments}

module.exports = wrap