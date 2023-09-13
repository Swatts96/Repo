"use strict";
var readlineSync = require("readline-sync");

function main()
{
    //input and variables section
    var salary = readlineSync.question("What is your weekly salary? ");
    var bonus = readlineSync.question("What is your bonus? ");

    //processing section
    var weeklypay = salary + bonus;

    //output section
    console.log(weeklyPay);
}

if (require.main === module)
{
        main();
}
