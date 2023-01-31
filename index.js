const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer"); 
const path = require('path');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');
const render = require('./src/template.js');
const team = [];


function generate() {
    function createTeam() {
        inquirer
         .prompt([
            {
                type: "list",
                name: "teamMember",
                message: "What role do you want to add?",
                choices: ["Manager","Engineer", "Intern", "No more roles to be added"]
            }
         ])
         .then(answer => {
           switch (answer.teamMember) {
            case "Manager":
              setManager();
              break;
            case "Engineer":
              setEngineer();
              break;
            case "Intern":
              setIntern();
              break;
            default: buildTeam();
            
           }
         });
    }
      
    function setManager() {
      inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the manager's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'
                },

            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the Manager's ID?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'

                },  
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the Manager's email?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter a valid email'

                },
            },
            {
               type: 'input',
               name: 'managerOfficeNumber',
               message: "What is the Manager's office number?",
               validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Must enter at least one number'

                },

            },
        ]) 
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber
            );
            team.push(manager);
            createTeam();
        });
    }

    function setEngineer() {
        inquirer
          .prompt([
            {
                type: 'input',
                name: 'EngineerName',
                message: "What is the Engineer's name?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'
    
                    },
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the Engineer's ID?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'
    
                    },
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the Engineer's email?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'
    
                    }, 
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the Engineer's GitHub username?",
                validate: (answer) => {
                    if (answer !== '') {
                        return true;
                    }
                    return 'Must enter at least one character'
                }  
            },
           
        ]) 
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            team.push(engineer);
            createTeam();
        });
    }

    function setIntern() {
        inquirer
          .prompt([
            {
              type: "input",
              name: "internName",
              message: "What is the Intern's name?",
              validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Must enter at least one character'
              }  
            },
            {
              type: "input",
              name: "internId",
              message: "What is the Intern's ID?",
              validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Must enter at least one character'
              }   
            },
            {
              type: "input",
              name: "internEmail",
              message: "What is the Intern's email?",
              validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Must enter a valid email'
              }  
            },
            {
              type: "input",
              name: "internSchool",
              message: "What school is the Intern currently enrolled in?",
              validate: (answer) => {
                if (answer !== '') {
                    return true;
                }
                return 'Must enter at least one character'
              }  
            },
          ])
    
          .then((answers) => {
            const intern = new Intern(
              answers.internName,
              answers.internId,
              answers.internEmail,
              answers.internSchool
            );
            team.push(intern);
            createTeam();
            });
      }

      function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
          fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(team), 'utf-8');
      }
    
      createTeam();
    }
generate();

