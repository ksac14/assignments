/* Assignment 7: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging"; */
console.log("###############Assignment 7############")

let sentence : string = "Java programming is fun and challenging"
let splittedWords: string[] = sentence.split(" ")

//1. Count the total number of words in the sentence.
console.log(`7.1 Total number of words in the sentence : ${splittedWords.length} `)

//2. Print the sentence words in reverse order.
let reverseString : string[] = [...splittedWords]
 reverseString  = reverseString.reverse()
let reverseSentence : string = reverseString.join(" ")
console.log(`7.2 Sentence in reverse order : ${reverseSentence}`)

//3. Convert the first character of each word to uppercase and print original sentence
let upperCaseWord : string = ""
let upperCaseSentence : string[] = []

for(let word of splittedWords) {
    upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)
    upperCaseSentence.push(upperCaseWord)   
}

let firstCharUppercase : string = upperCaseSentence.join(" ")
console.log(`7.3 First character of each word to uppercase : ${firstCharUppercase}`)

/* Assignment 8: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word */

console.log("###############Assignment 8############")

let paragraph : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more."
let splittedPara : string [] = paragraph.split(" ")
let count = 0;
for(let i=0;i<splittedPara.length;i++) {
    if(splittedPara[i] === "Java")
    {
        console.log(`"Java is there at index ${i}`)
        count++
    }
}
console.log(`8.2 Total number of occurences of "Java" is ${count}`)

/* Assignment 9: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
*
**
***
****
***** */

console.log("###############Assignment 9############")
let n: number = 6;
for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
        str = str + " ";
    }

    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}