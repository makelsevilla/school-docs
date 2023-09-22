const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Num 1: ", (num1) => {
    readline.question("Num 2:", (num2) => {
        console.log("The sum is: " + (parseInt(num1) + parseInt(num2)))
        readline.close();
    })

})