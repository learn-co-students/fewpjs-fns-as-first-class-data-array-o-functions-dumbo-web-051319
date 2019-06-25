

const wakeDog = (dogName="Xerox", dogBreed="Border Collie") => {
    console.log(`Wake ${dogName} the ${dogBreed}`);
        return `Wake ${dogName} the ${dogBreed}`
} 

const leashDog = (dogName="Leash Boo Radley", dogBreed="Pibble") => {
    console.log(`Leash ${dogName} the ${dogBreed}`);
        return `Leash ${dogName} the ${dogBreed}`
} 

const walkToPark = (dogName= "Bunny", dogBreed= "Labrador") => {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return `Walk to the park with ${dogName} the ${dogBreed}`

}

const throwFrisbee = (dogName= "Mary J. Blige", dogBreed= "Papillon") => {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}


const walkHome = (dogName= "Santa Paws", dogBreed= "Husky") => {
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return `Walk home with ${dogName} the ${dogBreed}`

} 


const unleashDog = (dogName= "Lauren", dogBreed= "Golden Retriever") => {
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return `Unleash ${dogName} the ${dogBreed}`

}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]




const independentDog = routine.map(routine => routine.independentDog); 
    console.log(independentDog)

