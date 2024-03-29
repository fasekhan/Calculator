#! /usr/bin/env node 

import inquirer from "inquirer"

// user input 
let answers = await inquirer .prompt([
    {
        name:"num1",
        type:"number",
        message:"please enter first number:",
    },
{
    name:"num2",
    type:"number",
    message:"please enter second number:",
},
{
    name:"operator",
    type:"list",
    message:"please select the operator:",
    choices:["+","-","*","/",]
}
])
   
// variable declaration 
let number1:number = answers.num1
let number2:number = answers.num2
let opt:string = answers .operator 

// conditional statements
if (opt ==="+"){
    console.log(`${number1} ${opt} ${number2} = ${number1+number2}`)
}
else if (opt ==="-"){
    console.log(`${number1} ${opt} ${number2} = ${number1-number2}`)
}
}
else if (opt ==="*"){
    console.log(`${number1} ${opt} ${number2} = ${number1*number2}`)
}
}
else if (opt ==="/"){
    console.log(`${number1} ${opt} ${number2} = ${number1/number2}`)
}
}