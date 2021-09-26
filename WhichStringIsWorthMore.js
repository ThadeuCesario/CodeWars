//https://www.codewars.com/kata/5840586b5225616069000001/train/javascript

function highestValue(a, b) {
  const ascCodeA = a.split("")
                    .map(element => element.charCodeAt(0))
                    .reduce((element, accumulator) => element + accumulator);

  const ascCodeB = b.split("")
                    .map(element => element.charCodeAt(0))
                    .reduce((element, accumulator) => element + accumulator);

  return ascCodeA >= ascCodeB ? a : b;
}

console.log(highestValue("ABCD", "DCBA"));
console.log(highestValue("!\"?$%^&*()", "{}[]@~'#:;"));