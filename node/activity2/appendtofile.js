const fs = require("fs")

fs.readFile("./new_students.txt", (err, data) => {
    
    if (err) {
        console.log("error: " + err)
    }

    const stringData = data.toString()
    fs.appendFile("./student.txt", stringData, () => {
        console.log(`${stringData} \nsuccessfuly appended.`)
    })
})