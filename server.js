const inquirer = require ('inquirer');
const handlers = require('./db/connection')

const mainMenuQuestions = [
    {
        type: 'list',
        choices: ["View all departments", 
                  "View all roles", 
                  "View all employees",
                  "Add a department", 
                  "Ad a role", 
                  "Add an employee",
                  "Update an employee role"],
        message: "What would you like to do?",
        name: 'choice'
    }
]

const employeeQuestions = [
    {
        type: 'input',
        message: "Please enter employee first name:",
        name: 'first_name'
    },
    {
        type: 'input',
        message: "Please enter employee last name:",
        name: 'last_name'
    },
    {
        type: 'input',
        message: "Please enter role id:",
        name: 'role_id'
    },
    {
        type: 'input',
        message: "Please enter manager id:",
        name: 'manager_id'
    }
]
const roleQuestions = [
    {
        type: 'input',
        message: "Please enter the role's title:",
        name: 'title'
    },
    {
        type: 'input',
        message: "Please enter the role's salary:",
        name: 'salary'
    },
    {
        type: 'input',
        message: "Please enter the role's department id:",
        name: 'department_id'
    },
]
const departmentQuestions = [
    {
        type: 'input',
        message: "Please enter department date:",
        name: 'name'
    }
]


const userMenu = async () => {
    const userChoice = await inquirer.prompt([...mainMenuQuestions])
    switch (userChoice.choice) {
        case 'View all departments':
            handlers.allEmployees()
            userMenu()
            break;
        case 'View all roles':
            handlers.allRoles()
            userMenu()
            break;
        case 'View all employees':
            handlers.allEmployees()
            userMenu()
            break;
        case "Add an employee":
            const department = await inquirer.prompt([...employeeQuestions])
            handlers.addEmployee(department)
            userMenu()
            break;
        // case value:
        //     userMenu()
        //     break;
        // case value:
        //     userMenu()
        //     break;
        // case value:
        //     userMenu()
        //     break;
        default:
            console.log("Choice not supported yet")
            userMenu()
            break;
    }
}

userMenu()

// handlers.allEmployees()
// handlers.allRoles()
// handlers.allDepartments()

