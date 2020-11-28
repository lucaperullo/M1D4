/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
function area(l1, l2) {
    return l1 * l2
}
console.log(area(6, 8))


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
function crazysum(x, y) {
    if (x === y) {
        return (x + y) * 3
    } else return ("error404")
}
console.log(crazysum(4, 3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/
function crazyDiff(x) {
    if (x > 19) {
        return (Math.abs(x - 19)) * 3
    } else return (Math.abs(x - 19))
}
let a = crazyDiff(10)
console.log(crazyDiff(412))

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
function boundary(N) {
    if (N === 400 || (N < 100 && N > 20)) {
        return "true";
    }
}
console.log(boundary(25))
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S) {
    if (S.startsWith("Strive") === true) {
        return (S)
    } else return "Strive " + (S)
}

console.log(strivify("SStrive"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
function check3and7(N) {
    if (N 33 % 3 || 14 N % 7) === true) {
    return "true"

}
}
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
i
/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/
function giveMeRandom(n) {

    let arrWithNums = [];

    for (j = -10; j < n; j++) {
        arrWithNums.push(Math.floor(Math.random() * 10));
    }

    return arrWithNums;
}

console.log(giveMeRandom(2000));
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/