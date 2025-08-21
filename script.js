const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

console.log(addLunchToEnd(lunches, "Tacos"))

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

console.log(addLunchToStart(lunches, "Sushi"));

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.")
  } else {
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;

  }

}

console.log(removeLastLunch(lunches));

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.")
  }else {
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`)
  }
  return arr;
};

console.log(removeFirstLunch(lunches));

console.log(addLunchToStart(lunches, "Adobo"))
console.log(addLunchToEnd(lunches, "Sinigang"))
function getRandomLunch(arr) {
if(arr.length === 0) {
console.log("No lunches available.")
return null;
}else {
const randomIndex = Math.floor(Math.random() * arr.length);
const randomLunch = arr[randomIndex];
console.log(`Randomly selected lunch: ${randomLunch}`)
return randomLunch;
}


}
getRandomLunch(lunches);


addLunchToEnd(lunches, "Tacos");
addLunchToStart(lunches, "Sushi");
getRandomLunch(lunches);

function showLunchMenu(arr) {
if (arr.length === 0){
console.log("The menu is empty.");
}else{
 
 console.log(`Menu items: ${arr.join(", ")}`)
 return arr;
}
}
console.log(showLunchMenu(lunches))