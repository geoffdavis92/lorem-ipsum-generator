import LoremIpsum from 'lorem-ipsum'

window.LI = LoremIpsum

const test = LoremIpsum({
    count: 1                      // Number of words, sentences, or paragraphs to generate. 
  , units: 'words'            // Generate words, sentences, or paragraphs. 
  , sentenceLowerBound: 5         // Minimum words per sentence. 
  , sentenceUpperBound: 15        // Maximum words per sentence. 
  , paragraphLowerBound: 3        // Minimum sentences per paragraph. 
  , paragraphUpperBound: 7        // Maximum sentences per paragraph. 
  , format: 'plain'               // Plain text or html // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default. 
  , random: Math.random
})

export default config => LoremIpsum({ config })