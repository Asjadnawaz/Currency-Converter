#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    PKR: 277.95,
    INR: 83.61,
    IDR: 16117.80,
};
let user_answer = await inquirer.prompt([{
        message: "Select From Curreny ",
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
        message: "Enter Amount to convert",
        type: "number",
        name: "amount",
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let BaseAmount = amount / fromAmount;
let convertedAmount = BaseAmount * toAmount;
console.log("1 USD in" + " " + user_answer.to + " " + "is" + " " + currency[user_answer.to]);
console.log(convertedAmount + " " + user_answer.to);
