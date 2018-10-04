/**
 * @var {Array[String]}
 */
const ARTICLES      = ['a', 'an', 'the',]
const PREPOSITIONS  = [
  'aboard', 'about', 'above', 'across', 'after',
  'against', 'along', 'amid', 'among', 'around',
  'as', 'at', 'before', 'behind', 'below',
  'beneath', 'beside', 'between', 'beyond', 'but',
  'by', 'concerning', 'considering', 'despite', 'down',
  'during', 'except', 'following', 'for', 'from',
  'in', 'inside', 'into', 'like', 'minus',
  'near', 'next', 'of', 'off', 'on',
  'onto', 'opposite', 'out', 'outside', 'over',
  'past', 'per', 'plus', 'regarding', 'round',
  'save', 'since', 'than', 'through', 'to',
  'toward', 'under', 'underneath', 'unlike', 'until',
  'up', 'upon', 'versus', 'via', 'with',
  'within', 'without',
]
const PRONOUNS      = [
  'all', 'another', 'any', 'anybody', 'anyone',
  'anything', 'as', 'aught', 'both', 'each',
  'either', 'enough', 'everybody', 'everyone', 'everything',
  'few', 'he', 'her', 'hers', 'herself',
  'him', 'himself', 'his', 'i', 'idem',
  'it', 'its', 'itself', 'many', 'me',
  'mine', 'most', 'my', 'myself', 'naught',
  'neither', 'nobody', 'none', 'nothing', 'nought',
  'one', 'other', 'others', 'ought', 'our',
  'ours', 'ourself', 'ourselves', 'several', 'she',
  'some', 'somebody', 'someone', 'something', 'somewhat',
  'such', 'suchlike', 'that', 'thee', 'their',
  'theirs', 'theirself', 'theirselves', 'them', 'themself',
  'themselves', 'there', 'these', 'they', 'thine',
  'this', 'those', 'thou', 'thy', 'thyself',
  'us', 'we', 'what', 'whatever', 'whatnot',
  'whatsoever', 'whence', 'where', 'whereby', 'wherefrom',
  'wherein', 'whereinto', 'whereof', 'whereon', 'wherever',
  'wheresoever', 'whereto', 'whereunto', 'wherewith', 'wherewithal',
  'whether', 'which', 'whichever', 'whichsoever', 'who',
  'whoever', 'whom', 'whomever', 'whomso', 'whomsoever',
  'whose', 'whosever', 'whosesoever', 'whoso', 'whosoever',
  'ye', 'yon', 'yonder', 'you', 'your',
  'yours', 'yourself', 'yourselves',
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
