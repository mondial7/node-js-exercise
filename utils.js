const Dictionary = require('./dictionary')

/**
 * Extract Text from a given file
 * @param {String}    filename path to file to be parsed
 * @return {String}   return empty string in case of error
 */
function extractText(filename) {
  // read file full file content in a string
  // return such string
}

/**
 * Generate frequency matrix
 * @param {String}  content
 * @return {Array[String=>String]}
 */
function countWords(content) {
  // for each word
    // if is blacklisted continue
    // else count and add to result matrix
  // return the resulted matrix
}

/**
 * Printout on the console the frequency matrix
 * @param {Array[String=>String]} frequencies
 */
function printMatrix(frequencies) {
  // pretty print as json object
  // console.log(JSON.stringify(frequencies, null, 2))
}

/**
 * Expose functions
 */
module.exports = {
  extractText,
  countWords,
  printMatrix,
}
