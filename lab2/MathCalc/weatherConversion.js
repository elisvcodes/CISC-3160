
const weatherForTheWeek = [85,90,87,92,78,81,78];

let FtoC = weatherForTheWeek.map((f) => {
    return ((f - 32) * (5/9)).toFixed(0)
})

let CtoF = FtoC.map((c) => {
  return parseInt((c*(9/5) +32));
})

console.log('Fahrenheit to Celsius')
console.log(FtoC);

// The reason why when we convert to Celsius we lose a point is because when I was doing Fahrenheit to Celsius I trimmed all of the decimal numbers.

console.log('Celsius to Fahrenheit')
console.log(CtoF);
