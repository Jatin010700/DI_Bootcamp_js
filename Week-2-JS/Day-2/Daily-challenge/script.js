const sentence = ('The movie is not that bad, I like it');
console.log(sentence);

const wordNot = sentence.indexOf('not');
console.log(wordNot);

const wordBad = sentence.indexOf('bad');
console.log(wordBad);

let good = sentence.replace(/not that bad/g, 'good')
console.log(good);