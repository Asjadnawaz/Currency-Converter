#! /usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
    USD: 1,
    PKR: 277,
    INR: 75
}

let user_answer = await inquirer.prompt ([{
    message: "Select From Curreny ",
    type: "list",
    name: "From",
    choices: ["USD", "PKR", "INR"]
},
{
    message: "Select to Currency",
    type: "list",
    name: "to",
    choices: ["USD", "PKR", "INR"]
},

{
    message: "Enter Amount to convert",
    type: "number",
    name: "amount",
}
]);

let fromAmount: any = currency[user_answer.From];
let toAmount: any = currency[user_answer.to];
let amount: any = user_answer.amount;
let BaseAmount: any = amount / fromAmount;
let convertedAmount: any = BaseAmount * toAmount;

console.log(convertedAmount);

