/**
 * SPECIFICATION
 *
 * The program has to read a text from one or several files. The names will be
 * provided as an input to the program. For each file provided, the program has
 * to show: the frequency of appearance of each word it contains, excepting:
 * articles, prepositions and pronouns, which will not be taken into
 * consideration.
 */

const fs = require('fs')
const Utils = require('./utils')

// store inputs parameters
const files = process.argv.splice(0, 2)

console.log(`Trying to analyse ${files.length-2} files.`)

let n = 0
for (let i = 0; i < files.length; i++) {
  try {
    // verify whether is a file and is readable
    fs.accessSync(files[i], fs.constants.R_OK);
    Utils.printMatrix(Utils.countWords(Utils.extractText(files[i])))
    n++
  } catch (err) { /* at the moment we do not track exceptions */ }
}

console.log(`Analysis completed. ${n} files analysed.`)
