

let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
alert(quoteString)
let upperCaseString = quoteString.toUpperCase()
console.log(alert(`Your upper case string is: ${upperCaseString}`))
let authorString = "- Henry Ford"
alert(authorString);
let completeString = quoteString + authorString
alert(completeString)
let found =  quoteString.includes(authorString)
switch(found) {
case(true):
    alert("Henry was in the quote string")
    break 
case(false):
   alert("Henry was NOT in the quote string")
}
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
alert(secondQuote)
let lowerCaseString = secondQuote.toLowerCase()
console.log(alert("Lower case string is:" + lowerCaseString))
let userNum = parseInt(prompt("please give a number"))
let userNewNum = 10 + userNum
console.log(alert(`the number ${userNum} + 10 is ${userNewNum}.`))


