// define functions as variables
let wakeDog = function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

let leashDog = function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

let walkToPark = function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

let throwFrisbee = function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

let walkHome = function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}

let unleashDog = function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

//turn that function into an array using your new variable names
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

//GUYS DON'T FORGET THAT WE HAVE ITERATORS WE LEARNED IN RUBY THAT CAN BE USED IN JS (google how to use .map for JS)
//I originally started writing out a for loop....
function exerciseDog(dogName, dogBreed){
const array = routine.map(task => task(dogName, dogBreed));
return array;
}
