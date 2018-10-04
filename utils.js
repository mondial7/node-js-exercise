const fs = require('fs')
const Dictionary = require('./dictionary')

/**
 * Check if the word should be counted
 * @param {String}  word
 * @return {Boolean}
 */
function isWhitelisted(word) {
  return !Dictionary.isArticle(word) &&
         !Dictionary.isPronoun(word) &&
         !Dictionary.isPreposition(word)
}

/**
 * Extract Text from a given file
 * @param {String}    path path to file to be parsed
 * @return {String}   return empty string in case of error
 */
function extractText(path) {
  return fs.readFileSync(path)
}

/**
 * Generate frequency matrix
 * @param {String}  content
 * @return {Object[Key=>String]}
 */
function countWords(content) {
  let frequencies = {}
  content.replace(/\W/g, ' ').split(' ').forEach(word => {
    word = word.trim()
    if (word.length > 0 && isWhitelisted(word)) {
      // else count and add to result matrix
      frequencies[word] = Number.isInteger(frequencies[word])
                          ? frequencies[word]++
                          : 1
    }
  })
  return frequencies
}

/**
 * Printout on the console the frequency matrix
 * @param {Object[Key=>String]} frequencies
 */
function printMatrix(frequencies) {
  // pretty print as json object
  console.log(JSON.stringify(frequencies, null, 2))
}

/**
 * Expose functions
 */
module.exports = {
  extractText,
  countWords,
  printMatrix,
}
