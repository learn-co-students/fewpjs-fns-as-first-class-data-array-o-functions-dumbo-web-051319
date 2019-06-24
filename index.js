
var wakeDog = function(dogName="Byron", dogBreed="poodle"){
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

var leashDog = function(dogName, dogBreed){
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}
var walkToPark = function(dogName, dogBreed){
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}
var throwFrisbee = function(dogName, dogBreed){
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
var walkHome = function (dogName, dogBreed){
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}
var unleashDog = function(dogName, dogBreed){
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

// wakeDog();

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
debugger

function exerciseDog(dogName, dogBreed){
  let arr = [];
  for(let i = 0; i < routine.length; i++){
    arr.push(routine[i](dogName, dogBreed));
  }
  return arr;
}
