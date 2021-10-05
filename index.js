// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)    
}

function destructivelyPrependCat(name){
    cats.unshift(name) 
}

function  destructivelyRemoveLastCat (){
    cats.pop(); 
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}

function appendCat(name){
    let newArr = [...cats];
     newArr.push(name)
     return newArr;
}

function prependCat(name){
  let newArr = [...cats]
  newArr.unshift(name);
  return newArr;
}

function removeLastCat(){
    let newArr = [...cats]
    newArr.pop();
    return newArr;
}

function removeFirstCat(){
  let newArr = [...cats]
  newArr.shift();
  return newArr;
}