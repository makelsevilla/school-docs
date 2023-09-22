const fs = require("fs")

const buffer = fs.readFileSync("./helloworld.txt")

console.log(buffer.toString())

fs.readFile("./helloworld.txt", (err, data) => {
    console.log(data.toString())
})

fs.writeFileSync("./anotherOne.txt", "Hello again")

fs.appendFileSync("./anotherOne.txt", "\nHello universe")

console.log(fs.existsSync("./anotherOne.txt", ))

console.log(fs.readdirSync("./", {withFileTypes: false}))