#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

let currency: any = {
    USD: 1,
    PKR: 277.95,
    INR: 83.61,
    IDR: 16117.80,
}

let user_answer = await inquirer.prompt ([{
    message: "Select From Currency ",
    type: "list",
    name: "From",
    choices: ["USD", "PKR", "INR", "IDR"]
},
{
    message: "Select to Currency",
    type: "list",
    name: "to",
    choices: ["USD", "PKR", "INR", "IDR"]
},

{
    message: "Enter Amount to convert:",
    type: "number",
    name: "amount",
}
]);

let fromAmount: any = currency[user_answer.From];
let toAmount: any = currency[user_answer.to];
let amount: any = user_answer.amount;
let BaseAmount: any = amount / fromAmount;
let convertedAmount: any = BaseAmount * toAmount;

console.log(`===================`);
console.log(chalk.bold( "1 USD in"+" "+user_answer.to +" "+"is"+" "+ currency[user_answer.to]));
console.log(`So,`);
console.log(chalk.bold(user_answer.amount +" "+ user_answer.From +" equals" +" "+ chalk.green(Math.floor(convertedAmount)) +" "+ chalk.yellow(user_answer.to)));


