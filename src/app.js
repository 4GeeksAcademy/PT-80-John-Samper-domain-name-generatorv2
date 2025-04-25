import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our' ,'his', 'her', "their", 'your'];
let adj = ['great', 'big' , 'first', 'unexpected' , 'unhingeed' , "goofylooking"];
let noun = ['jogger', 'racoon','dog', 'mailman', "drill-sergeant " , "Photographer"];


function GetRandomNumber (min,max){
  return Math.floor(Math.random() * (max - min) + min );
}
function getRandom(anyArray){
  let max = anyArray.length -0;
  let min = 0;
  let random = GetRandomNumber(min,max)
  return anyArray [random];
  ////return anyArray[random(0, anyArray.length)];
}




window.onload = function() {

  document.querySelector(`#excuse`).innerHTML = getRandom(pronoun) + "" + getRandom(adj) + "" + getRandom(noun) + ".com" ; 
  //write your code here
  
  const numberOfDomains = 10 

  for (let i = 0; i < numberOfDomains; i++) {
    const domain = `${getRandom(pronoun)}${getRandom(adj)}${getRandom(noun)}.com`;
    console.log(domain);


    const firstDomain = `${getRandom(pronoun)}${getRandom(adj)}${getRandom(noun)}.com`;
  document.querySelector("#excuse").innerHTML = firstDomain;
  }

  console.log(document.querySelector(`#excuse`).innerHTML ) ;
};
