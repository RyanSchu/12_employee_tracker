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

const addDepartment = (data) => {
  db.query(`INSERT INTO department (name) VALUE ("${data.name}");`)
}

const addEmployee = (data) => {
  db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${data.first_name}", "${data.last_name}", ${data.role_id}, ${data.manager_id});`)
}

const addRole = (data) => {
  db.query(`INSERT INTO role (title, salary, department_id) VALUE ("${data.title}", ${data.salary}, ${data.department_id});`)
}

const wrap = {
  allEmployees,
  allRoles,
  allDepartments,
  addEmployee,
  addDepartment,
  addRole
}

module.exports = wrap