
var userScore=0;
var compScore=0;
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".Score-board");
const result_div=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

rock_div.addEventListener("click",function() {
  game("r");
});
paper_div.addEventListener("click",function() {
  game("p");
});
scissor_div.addEventListener("click",function() {
  game("s");
});

function game(userChoice)
{
  const compChoice=getComputerChoice();
  switch(userChoice+compChoice)
  {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice,compChoice);
      break;
  }
}
function getComputerChoice()
{
  const choices=["r","p","s"];
  const n= Math.floor(Math.random()*3);
  return choices[n];
}
var smallUser="user".fontsize(3).sub();
var smallComp="comp".fontsize(3).sub();
function win(user,comp)
{
  userScore++;
  userScore_span.innerHTML=userScore;
  result_div.innerHTML=convertToWord(user)+smallUser+" beats "+convertToWord(comp)+smallComp+". YOU WIN!🔥";
  document.querySelector("#"+user+" img").classList.add("win");
  setTimeout(function() {
    document.querySelector("#"+user+" img").classList.remove("win");
  }, 500);
}
function lose(user,comp)
{
  compScore++;
  compScore_span.innerHTML=compScore;
  result_div.innerHTML=convertToWord(user)+smallUser+" loses to "+convertToWord(comp)+smallComp+". YOU Lost!😢";
  document.querySelector("#"+user+" img").classList.add("lose");
  setTimeout(function() {
    document.querySelector("#"+user+" img").classList.remove("lose");
  }, 500);
}
function tie(user,comp)
{
  result_div.innerHTML=convertToWord(user)+smallUser+" is Equal To "+convertToWord(comp)+smallComp+". Tie";
  document.querySelector("#"+user+" img").classList.add("tie");
  setTimeout(function() {
    document.querySelector("#"+user+" img").classList.remove("tie");
  }, 500);
}
function convertToWord(letter)
{
  if(letter==="r")
    return "Rock";
  else if(letter==="p")
    return "Paper";
  else
    return "Scissor";
}
