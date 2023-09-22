const fs = require("fs")

fs.readFile("./student.txt", (err, data) => {
    console.log(data.toString())
})

// const names = fs.readFileSync("./student.txt")
// console.log(typeof names.toString())