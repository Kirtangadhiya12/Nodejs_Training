// String Assignment :
const string1 = "cat is blue";
const string2 = 'he was playing with dog';
const string3 = `this is tamplate literal`;

// using String constructor: 
typeof new String("hello world"); //object unlike string.

//using static mathod  --string.raw()
const rawString = String.raw`C:\Development\profile\aboutme.html`;
//syntax :
//String.raw(callSite, ...substitutions);
String.raw({ raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
// if raw: can be any iterable or string.
// 'test' is treated as ['t', 'e', 's', 't'].
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t' 
//String.raw`templateString`;
// Return value : String

// LENGTH property 
string1.length // returns length of string counts number of code units in string.


/* STRING METHODS */

// String.at(index)     index can be positive or negative.
string2.at(5); // experimental
// returns string of single cahracter if index is valid else undefined 

String.charAt(index)
// only take positive index 
// returns string if possible else empty string.

//concat
const strConcat = string3.concat(string1, string2);
//syntax: string.concat(str1, ..., strN);
//return: new string
// performance: low (insted Use +, +=)

//endsWith
const boolEndsWith = string1.endsWith('blue');
//syntax: str.endsWith('searchStr', length); /length - consider str to of length.
//return: boolean
// caseSensitive

//includes
string4.includes('cat');
//syntax: str.includes(strToSearch[, position = 0]);
//return: boolean
// caseSensitive

//indexOf
//returns index of first occurance of match
let result = string4.indexOf('blue');
//syntax: str.indexOf(substrToSearch [,position]); start finding from position.
//return: index of first match or -1
// position < 0 => position = 0, position > length => return -1 

//lastIndexOf
//returns index of last occurance of match
result = string4.indexOf('dog');
//syntax: str.lastIndexOf(substrToSearch [,position]); find before position ,default position = +infinity.
//return: index of last match or -1
// position < 0 => position = 0, position > length => search entire str.

//localcompare
//syntax: str1.localeCompare(str2);

//match 
string1.match(/\w/g);
//syntax: str.match(regEx);
//return: Array if match found(depending on g flag) content or null if none.
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.


//matchAll
string1.matchAll(/b/g); 
//  syntax: str.matchAll(regex);
// return: iterator of match.

//repeat
let testStr = 'blue';
result = testStr.repeat(5);
//  syntax: str.repeat(number);
//  result: new str with number of copy.

//  replace
result = string1.replace('cat','whale');
//  syntax: str.replace(target, newstr),
//          str.replace(regexp, newsubstr|newsubStrFunction);
//  return : new String with all or some matches replaced. ? if pattern is string only first match will be replaced. 

//  replaceAll
// syntax and return same as replace ./ but all match to be replaced

//  search
string1.search(/cat/);
//  syntax: str.search(regexp);
//  return: index of first match or -1

//  slice
console.log(string2.slice(3,5));
//  syntax: slice(beginIndex = 0, endIndex = length);
//  beginIndex > length => '' , beginIndex < 0 = length + beginIndex
//  endIndex < 0 = length + endIndex, endIndex < beginIndex => '' 
//  return: new String

//  split
console.log(string4.split(/\s/));
//  syntax: split(), split(separator), split(separator, limit); / limit to take no of entery in result.
//  return: array of elem. 

//  startsWith
console.log(string1.startsWith('cat'));
//  syntax: startsWith(searchString), startsWith(searchString, position = 0) / position to where search begins
//  return: boolean

//  substring
console.log(string2.substring(4,6));
//  syntax: substring(indexStart, indexEnd  = length);
//  startindex < 0 => index = 0 ; endString < startindex => both swapped
// don't use negative indexing in substring if possible
//  return new string

//  toLowerCase
console.log(string1.toLowerCase());
//  syntax: toLowerCase()
//  return: new string converted to lower case

//  toUpperCase
console.log(string1.toUpperCase());
//  syntax: toUpperCase()
//  return: new String;

//  toString , valueOf()
const stringObj = new String('foo');
console.log(stringObj);
// expected output: String { "foo" }
console.log(stringObj.toString());
// expected output: "foo"

//  trim() , trimstart, trimEnd
console.log("     hello world     ".trim());
//  output: "hello world";
//  return: new string trimed white space from both side
