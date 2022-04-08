

function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return "This one is on me!"
  }
  else if(distance > 400 && distance <= 2000){
    return "That will be twenty bucks."
  }
  else if (distance > 2000 && distance <= 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (distance > 2500){
    return "No can do."
  }
  else{
    return "enter a distance"
  }
}

console.log(scuberGreetingForFeet(0))


// TODO:use ternary operator
function ternaryCheckCity(city){

 if (city === "NYC"){
   return "Ok, sounds good."
 }
 else{
   return "No go."
 }
}

// const ternaryCheckCity = (city)=> city === "NYC" ?"Ok,sounds good.":"No go."

console.log(ternaryCheckCity("NYC"));


// TODO:use if else
let tip;

function switchOnCharmFromTip(tip){
  if(tip === "generous"){
    return "Thank you so much."
  }
  else if (tip === "not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}

console.log(switchOnCharmFromTip("stingy"))