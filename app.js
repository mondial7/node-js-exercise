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
const Dictionary = require('dictionary')

// TODO split in modules


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
 * Look for the word within the given array of elements
 * @param {String}        word
 * @param {Array[String]} elements
 * @return {Boolean}
 */
const isBlackListed = (word, elements) => {
  return elements.indexOf(word.toLowerCase()) !== -1
}

/**
 * Match a word with an article
 * @param {String}    word
 * @return {Boolean}
 */
const isArticle = word => isBlackListed(word, Dictionary.ARTICLES)

/**
 * Match a word with a preposition
 * @param {String}    word
 * @return {Boolean}
 */
const isPreposition = word => isBlackListed(word, Dictionary.PREPOSITIONS)

/**
 * Match a word with a pronoun
 * @param {String}    word
 * @return {Boolean}
 */
const isPronoun = word => isBlackListed(word, Dictionary.PRONOUNS)

/**
 * Printout on the console the frequency matrix
 * @param {Array[String=>String]} frequencies
 */
function showResults(frequencies) {
  //
}

/**
 * Generate frequency matrix
 * @param {String}  content
 * @return {Array[String=>String]}
 */
function countWords(content) {

}

/**
 * Trigger/Execute the app
 */
(function(){

  // evaluate inputs

  // for each file
    // generate a frequency matrix
    // print out the matrix

})()
