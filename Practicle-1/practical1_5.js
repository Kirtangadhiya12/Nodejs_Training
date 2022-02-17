/* Write a function that takes a string as an argument and returns the number of
words in it. (use appropriate built-in string and array functions as and when
required.)
*/

const countWords = (str) => {
    let words = str.split(/\s/ig);
    return words.length;
}
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(countWords(str));
