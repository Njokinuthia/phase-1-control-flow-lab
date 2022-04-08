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

console.log(scuberGreetingForFeet(1500))

function ternaryCheckCity(city){

 if (city === "NYC"){
   return "Ok, sounds good."
 }
 else{
   return "No go."
 }
}

console.log(ternaryCheckCity("Naiton"));

function switchOnCharmFromTip(){
  // Write your code here!
}