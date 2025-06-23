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


function sentence(places) {
    console.log(`I want to go ${places}`);
    
    
}
sentence('home')
sentence('playground')
sentence('school')


function greetUser2(userName) {
    if (userName === 'Anas') {
        console.log('Hi Anas! How are you?');
        
    } else if (userName === 'Goutam') {
        console.log('Hello Goutam! How is your day going?');
        
    } else {
        console.log('Hey Sanwar! Wish you a very happy coding life.');
        
    }

}
greetUser2('Anas')
greetUser2('Goutam')
greetUser2('Sanwar')


function places (placeName) {
    if (placeName==='home') {
        console.log('I want to go home');
        
    } else if (placeName==='school') {
        console.log('I hate school');
        
    } else {console.log('I love to go to exam hall')}
}
places('home')
places('school')
places('exam hall')



/* Calculating Average */

function calculataeAverage (result1, result2, result3, result4) {
    let totalResult = result1 + result2 + result3 + result4;
    let average= totalResult/4
    console.log(average);
    
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


function averageResult (result1, result2, result3, result4) {
    let totalResult= result1+result2+result3+result4;
    let average=totalResult/4;
    console.log(average);
    

}
averageResult(50, 90, 45, 77)
averageResult(70, 100, 80, 85)
averageResult(33, 40, 75, 69)


function resultInAverage (result1, result2, result3, result4, result5) {
    let totalResult = result1 + result2 + result3 + result4 + result5
    let average = totalResult/5
    console.log(average);
    
}
resultInAverage(50, 65, 82, 65, 74)
resultInAverage(57, 57, 83, 98, 72)


function averageResultOfStudents (result1, result2, result3, result4) {
    let totalResult = result1 + result2 + result3 + result4
    let average = totalResult/4
    console.log(average);
}
averageResultOfStudents(60, 80, 65, 93)
averageResultOfStudents(50, 86, 78, 43)



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


function sumArray2 (numbers) {
    let total = 0;
    for (i=0; i<numbers.length; i=i+1) {
        total = total+numbers[i]
        console.log(total);
        
    }
}
sumArray2([20, 50, 65, 85])


function sumArray3 (numbers) {
    let total=0;
    for (i=0; i<numbers.length; i=i+1)
        total = total + numbers[i];
    return total
}
let result = sumArray3([20, 40, 10, 30])
console.log(result);
let result2 = sumArray3([50, 40, 10, 30])
console.log(result2);


function sumArray4 (numbers) {
    let total=0;
    for (i=0; i<numbers.length; i=i+1)
        total = total + numbers[i];
    return total
}
let result3 = sumArray3([60, 50, 55, 35])
console.log(result3);
let result4 = sumArray3([75, 5, 10, 20])
console.log(result4);



/* Calculating vat with prices */

function calculatePriceWithVat (price, vatRate) {
    let mainPrice = price + (price * vatRate / 100)
    console.log(mainPrice);
    
}
calculatePriceWithVat(500, 15)
calculatePriceWithVat(760, 10)


function priceWithVat (price, vatRate) {
    let mainPrice = price + (price * vatRate / 100)
    console.log(mainPrice);
    
}
priceWithVat(200, 10)
priceWithVat(500, 10)


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


let prices2 = [200, 500, 700, 300]
function calculateTotalPrice2 (prices2, vatRate) {
    let totalPrice = 0;
    for (i=0; i<prices2.length; i=i+1) {
        totalPrice = totalPrice + prices2[i]
    }
    let vat = totalPrice * vatRate
    totalPrice = totalPrice + vat;
    console.log(totalPrice);
    
}
calculateTotalPrice2(prices2, 0.15)