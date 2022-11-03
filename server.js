const inquirer = require ('inquirer');
const mysql = require('mysql2')
const ctable = require('console.table')

const questions = [
    {
        type: 'input',
        message: 'please',
        name: 'varname'
    }
]


