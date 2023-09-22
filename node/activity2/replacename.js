replaceName("ann", "nna", { filePath: "./student.txt", log: true });

function replaceName(currentVal, newVal, { filePath, log }) {
  const fs = require("fs");

  const valsArr = fs.readFileSync(filePath).toString().split("\n");
  const currentValIndex = valsArr.indexOf(currentVal);

  if (currentValIndex === -1) {
    log && console.log("The provided current value doesn't exists.");

    return false;
  }

  valsArr[currentValIndex] = newVal;

  const updatedList = valsArr.toString().replaceAll(",", "\n");
  fs.writeFileSync(filePath, updatedList);

  log && console.log("List Updated Succesfuly.");
}
