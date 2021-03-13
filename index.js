// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat(name) {
  const newCatName = ["Arnold", ...cats];
  return newCatName;
}

function removeLastCat() {
  const newArrCats = cats.slice(0, cats.length - 1);
  return newArrCats;
}

function removeFirstCat() {
  const newCatRemove = cats.slice(1);
  return newCatRemove;
}
