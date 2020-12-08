/*
https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.
*/

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const findUserMonth = String(birthday).split('T');
  console.log(findUserMonth);
  console.log(birthday);
  console.log(String(birthday));
}

getVillainName(new Date("May 3"));