starTriangle(5)

function starTriangle(row) {
    for (let i = 1; i <= row; i++) {
        let star = ""
        for (let j = 1; j <= row - i; j++) {
            star += "  "
        }

        let k = 0;

        while (k != 2 * i - 1) {
            star += "* "
            k++
        }

        console.log(star)
    }
}

module.exports = { starTriangle }