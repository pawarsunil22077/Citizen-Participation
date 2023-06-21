//Set up variable to store the list of citizens
let citizens=['John','Mary','Albert','Harry','Steven','Samantha','Molly'];

//Set a limit to the number of participants
let maxParticipants=10;

//Create a blank array to store the participants
let participants = [];

//Create a function to randomly select the participants
function selectRandomCitizen(){
  let randomIndex = Math.floor(Math.random() * citizens.length);
  let randomParticipant = citizens[randomIndex];
  //Check to make sure the participant has not already been selected
  if (participants.indexOf(randomParticipant) === -1) {
    participants.push(randomParticipant);
  }
  //Recursively call the function until the max number of participants has been reached
  if (participants.length < maxParticipants) {
    selectRandomCitizen();
  }
}

//Call the function to select the participants
selectRandomCitizen();

//Log the participants
console.log(`The participants for citizen participation are ${participants.join(', ')}`);

//Create a function to remove a participant
function removeParticipant(name){
  //Check to see if the participant is in the list
  let index=participants.indexOf(name);
  //If so, splice them from the array
  if (index !== -1) {
    participants.splice(index, 1);
  }
  console.log(`${name} has been removed from the list of participants`);
  //Log the new list of participants
  console.log(`The new participants are ${participants.join(', ')}`);
}

//Create a function to add a participant
function addParticipant(name) {
  //Check to see if the citizen is already in the participants list
  if (participants.indexOf(name) !== -1) {
    console.log(`${name} is already in the list of participants`);
  } else {
    //Check to see if the max number of participants has been reached
    if (participants.length < maxParticipants) {
      // If not, add the citizen to the list
      participants.push(name);
      //Log the new list of participants
      console.log(`The new participants are ${participants.join(', ')}`);
    } else {
      console.log('The maximum number of participants has been reached!')
    }
  }
}