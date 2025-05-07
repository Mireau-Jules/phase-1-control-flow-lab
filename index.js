function scuberGreetingForFeet(someValue){
  if (someValue <= 400 ){
    return "This one is on me!";
  } else if (someValue <= 2000){
    return "That will be twenty bucks."
  } else if (someValue > 2000) {
    if (someValue > 2500){
      return "No can do."
    } else {
      return "I will gladly take your thirty bucks."
    }
    
  }
}

function ternaryCheckCity(city){
  return city==="NYC" ? "Ok, sounds good." : "No go."

}

function switchOnCharmFromTip(tipValue){
  switch (tipValue){
    case 'generous' : 
    return 'Thank you so much.';
    case "not as generous" :
      return  "Thank you.";
    default : 
    return "Bye." ; 
  }
   
}