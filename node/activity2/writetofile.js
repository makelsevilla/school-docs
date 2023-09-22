const fs = require("fs")

const studentNames = [
    "john",
    "jane",
    "doe",
    "michael",
    "sevilla",
    "kyle",
    "angela",
    "makel",
    "kyla",
    "quell"
]

studentNames.forEach((val, i) => {
    fs.appendFileSync("./student.txt", val + "\n")
})