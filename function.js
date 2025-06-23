/* Simple Function */

function sum (a, b, c) {
    let total = a+b+c
    console.log(total);
    
}
sum (5, 10, 15)
sum (20, 10, 15)


function subtract (a, b, c, d) {
    let total = a-b-c-d
    console.log(total);
    
}
subtract(100, 20, 50, 10)
subtract(150, 20, 30, 45)


function multiply (a, b, c, d) {
    let total = a*b*c*d
    console.log(total);
    
}
multiply(5, 10, 2, 4)
multiply(2, 4, 10, 5)


function divide (a, b, c) {
    let total = a/b/c
    console.log(total);
    
}
divide(200, 4, 2)
divide(300, 2, 3)


function all(a, b, c, d, e) {
    let total = a+b-c*d/e
    console.log(total);
    
}
all(100, 100, 3, 100, 2)
all(500, 100, 2, 1000, 4)



/* Greeting User */

function greetUser (name) {
    console.log(`Hello, ${name}`);
    
    
}
greetUser('Anas')
greetUser('Goutam')
greetUser('Abid')
greetUser('Parvez')



/* Calculating Average */

function calculataeAverage (result1, result2, result3, result4) {
    let totalResult = result1 + result2 + result3 + result4;
    totalResult= totalResult/4
    console.log(totalResult);
    
}
calculataeAverage(80, 80, 90, 86)
calculataeAverage(85, 75, 60, 70)
calculataeAverage(100, 90, 82, 98)
/*let avarageResult = calculataeAvarage(80, 80, 90)
/*let avarageResult2 = calculataeAvarage(85, 75, 60)
/*let avarageResult3 = calculataeAvarage(100, 90, 82)
console.log(avarageResult);
console.log(avarageResult2);
console.log(avarageResult3); */



/* Sum of array numbers */

function sumArray (numbers) {
    let total2 = 0
    for (i= 0; i<numbers.length; i=i+1) {
        total2= total2+numbers[i]
    }
    console.log(total2);
    
}
sumArray([5, 10, 15, 20])
sumArray([100, 10, 200, 20])
sumArray([50, 75, 15, 20])
sumArray([55, 105, 15, 205])



/* Calculating vat with prices */

let prices = [100, 200, 300]
function calculateTotalPrice (prices, vatRate) {
    let total3= 0
    for (i=0; i<prices.length; i=i+1) {
        total3= total3+prices[i]
    }
    let vat= total3 * vatRate
    total3= total3 + vat
    console.log(total3);
    
}
calculateTotalPrice(prices, 0.10)


