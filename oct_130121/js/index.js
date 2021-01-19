var numString = prompt('Введите число:');
var num = +numString;
var interval_1000_2000 = num>=1000 && num<=2000;
var isEvenAndNotMul10 = num%10!==0 && num%2===0;
var answer = interval_1000_2000 && isEvenAndNotMul10 || num%100===0 && num%300!==0;
alert('Ваше число подходит под все условия: ' + answer);