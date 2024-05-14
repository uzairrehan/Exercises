/*
    Muhammad uzair rehan 
    roll no = 174691
*/





// 1. Create a block of code that you can use several times. 



// function myFnc(num1 , num2) {
//     console.log(num1 + num2);
// }
// myFnc(6, 3);
// myFnc(45, 44);






// 2. Write a function that displays current date & time in your browser.




// function crtDateNTime() {
//     let current = new Date();
//     let crtDate = current.getDate();
//     let crtDay = current.getDay();
//     console.log(`current date is ${crtDate} and current day is ${crtDay}`);
// }
// crtDateNTime()

  





// 3. Write a function that takes first & last name and then it greets the user using his full name.



// function greet(firstName, lastName) {
//     let fullName = firstName + " " + lastName
//     console.log(`Hello ${fullName}`);
// }
// greet("Uzair","Shah")






// 4. Write a function that adds two numbers (input by user) and returns the sum of two numbers.





// function sum(num1 , num2) {
//     console.log(num1 + num2);
// }
// myFnc(+prompt(), +prompt());









// 5. Calculator:Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.




// function calculator(num1, num2, operator) {
//        if (operator === "+") {
//         return num1 + num2 ;
//        } 
//        else if(operator === "-"){
//         return  num1 - num2 ;
//        }
//        else if(operator === "*"){
//         return  num1 * num2 ;
//        }
//        else if(operator === "/"){
//         return  num1 / num2 ;
//        }
//        else if(operator === "%"){
//         return  num1 % num2 ;
//        }
//     }       

// let result = calculator(12 , 10 , "%")
// console.log(result)






// 6. Write a function that squares its argument





// function square(num) {
//     return num * num ;    
// }
// let result = square(5)
// console.log(result);









// 7. Write a function that computes factorial of a number.






// function factor(num) {
//         let result = 1;
//         for (let i = 2; i <= num; i++) {
//             result = result  *  i;
//         }
//         return result;
// }
// console.log(factor(7));








// 8. Write a function that take start and end number as inputs & display counting in your browser.




// function counting(num1, num2) {
//     for (let i = num1; i <= num2; i++) {
//         console.log(i);
//     }        
// }
// counting(+prompt("enter starting number"), +prompt("enter ending number"))






/*9. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()
*/


// function calHyp(base , perpendicular){
//     function calcSquare(number) {
//         return number * number;
//     }
//     let baseSquare = calcSquare(base);
//     let perpenSquare = calcSquare(perpendicular);
//     let hypotenuse = baseSquare + perpenSquare
//     console.log(Math.sqrt(hypotenuse));
// }
// calHyp(10,44)







// 10. Write a function that writes variable length arguments list in your browser.





// can't understand 








// 11. Write a function that accepts any number of arguments & find largest of the number.



// function findLarge() {
//   let largest = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > largest) {
//       largest = arguments[i];
//     }
//   }
//   console.log(largest);
// }

// findLarge(3242, 546477, 4543, 6564, 5346, 76733);




// 12. Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: a. Arguments as values b. Arguments as variables



// function calcArea(width , height) {
//    area = width * height ;
//    console.log(area);
// }

// // Arguments as values
// calcArea(2 , 2)


// // Arguments as variables
// let width = 3 ;
// let height = 4 ;
// calcArea(width, height)





// 13. Write a function that receives an array & returns the sorted array.







// let array =  ["Uzair","Haider","Ali","Umar","Syed", "Abdullah"]
// function sorted(array) {
//     array.sort()
// }
// sorted(array);
// console.log(array);






// 14. Write a function that takes numbers array, sums its elements & returns the sum.






// let array = [212,434,544,534,2,434,423,23]
// let summed = 0 ;
// function sumArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         summed += array[i];
//     }    
// }
// sumArray(array)
// console.log(summed);








// 15. Execute & monitor the output of following JS program:





// var param = function inner() {
//  return typeof inner;
// }
// alert(param());






// 16. Write a function that computes power of a number. E.g. 23 is 8.





// function power(number,power){
//     powerOfNumber = number ** power ;
//     console.log(powerOfNumber);
// }
// power(23 , 2)





// 17. Write a function that simulates a dice & returns a random dice value.



// function diceSimulate() {
//    random = Math.ceil(Math.random() * 6);
//     console.log(random);    
// }

// diceSimulate()





// 18. Write a JavaScript function that reverse a number. 




// let number = [1, 2, 3, 4, 5, 6, 7];
// function numberReverse(number) {
//     number.reverse();
//     number = number.toString().replace(/,/g, "");
//     console.log(number);
// }
// numberReverse(number);





// 19. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.




// function isPalindrome(value) {
//     splited = value.split("")
//     reversed = splited.reverse()
//     reversedValue = reversed.join("")
//     if (value === reversedValue){
//         console.log(`${value} is palindrome!`);
//     }
//     else{
//         console.log(`${value} is not palindrome!`);
//     }
// }


// isPalindrome("madam")






// 20. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.EXAMPLE STRING : 'the quick brown fox'EXPECTED OUTPUT : 'The Quick Brown Fox'