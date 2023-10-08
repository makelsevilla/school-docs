const fs = require("fs");
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readFile("./student.txt", (err, data) => {
  const namesArr = data.toString().split("\n");

  readLine.question("Enter the name you wish to change: ", (currentName) => {
    const currentNameIndex = namesArr.indexOf(currentName);

    if (currentNameIndex === -1) {
      console.log("The provided current value doesn't exists.");

      return false;
    }

    readLine.question("Enter the new name value: ", (newName) => {
      namesArr[currentNameIndex] = newName;
      updatedStringData = namesArr.toString().replaceAll(",", "\n");
      // updatedStringData = data.toString().replace(currentName, newName);
      console.log("Updated list of names: \n" + updatedStringData);

      // replace the student.txt with new list of names
      fs.writeFileSync("./student.txt", updatedStringData);

      readLine.close();
    });
  });
});
