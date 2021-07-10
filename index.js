function wakeDog(dogName, dogBreed) {
  const str = `Wake ${dogName} the ${dogBreed}`;
  console.log(str);
  return str;
}
function leashDog(dogName, dogBreed) {
  const str = `Leash ${dogName} the ${dogBreed}`;
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return str;
}
function walkToPark(dogName, dogBreed) {
  const str = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return str;
}
function throwFrisbee(dogName, dogBreed) {
  const str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return str;
}
function walkHome(dogName, dogBreed) {
  const str = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return str;
}
function unleashDog(dogName, dogBreed) {
  const str = `Unleash ${dogName} the ${dogBreed}`;
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return str;
}

const routine = [wakeDog,leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const results = [];
  results.push(wakeDog(dogName, dogBreed));
  results.push(leashDog(dogName, dogBreed));
  results.push(walkToPark(dogName, dogBreed));
  results.push(throwFrisbee(dogName, dogBreed));
  results.push(walkHome(dogName, dogBreed));
  results.push(unleashDog(dogName, dogBreed));
  return results
}
