//https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript
function lastSurvivor(letters, coords) {
    let lettersArray = letters.split("");
    coords.forEach(element => lettersArray.splice(element, 1));
    return lettersArray[0];
}

lastSurvivor('zbk', [2, 1])