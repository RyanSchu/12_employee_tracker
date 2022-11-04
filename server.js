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
        // case value:
        //     userMenu()
        //     break;
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

