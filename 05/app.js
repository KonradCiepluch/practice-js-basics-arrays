const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(number => !(number%2));

const sum = evenNumbers.reduce(function(a,b){
    return a+b;
})
console.log(evenNumbers);
console.log(sum);

