const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function dogAction(str) {
  console.log(str);
  return str;
}

function wakeDog(dogName, dogBreed) {
  const str = `Wake ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function leashDog(dogName, dogBreed) {
  const str = `Leash ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function walkToPark(dogName, dogBreed) {
  const str = `Walk to the park with ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function throwFrisbee(dogName, dogBreed) {
  const str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function walkHome(dogName, dogBreed) {
  const str = `Walk home with ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function unleashDog(dogName, dogBreed) {
  const str = `Unleash ${dogName} the ${dogBreed}`;
  return dogAction(str);
}

function exerciseDog(dogName, dogBreed) {
  const arr = [];
  routine.forEach(func => arr.push(func(dogName, dogBreed)));
  return arr;
}
