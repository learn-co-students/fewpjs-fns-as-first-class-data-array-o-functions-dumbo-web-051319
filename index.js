let dogName = "Byron";
let dogBreed = 'poodle';

function wakeDog(dogName, dogBreed) {
  return("Wake ${dogName} the ${dogBreed}");
}
function leashDog(dogName, dogBreed) {
  return("Leash ${dogName} the ${dogBreed}");
}function walkDog(dogName, dogBreed) {
  return("Walk to the park with ${dogName} the ${dogBreed}");
}function throwDog(dogName, dogBreed) {
  return("Throw the frisbee for ${dogName} the ${dogBreed}");
}function walkHomeDog(dogName, dogBreed) {
  return("Walk home with ${dogName} the ${dogBreed}");
}function unleashDog(dogName, dogBreed) {
  return("Unleash ${dogName} the ${dogBreed}");
}

const routine = [wakeDog,leashDog,walkDog,throwDog,walkHomeDog,unleashDog];

function excerciseDog(dogName,dogBreed){
  return routine.forEach(function (dogName,dogBreed){

})
}
