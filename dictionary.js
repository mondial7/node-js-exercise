/**
 * @var {Array[String]}
 */
const ARTICLES      = ['a', 'an', 'the',]
const PREPOSITIONS  = [
  'after', 'in', 'to', 'on',
]
const PRONOUNS      = [
  'i', 'me', 'mine', 'you', 'yours', 'his', 'her', 'hers', 'we', 'they', 'them',
]

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
 * Expose utilities functions
 */
modules.export = {
  isArticle,
  isPreposition,
  isPronoun,
}
