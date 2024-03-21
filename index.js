// code your solution here
// console.log (1+1)
// console.log("Razzle " + "dazzle!")
// function() {
//     console.log("Yet more razzling");
//   }
  
// function mondayWalk(treck){
   
//     console.log(mondayWalk) 
//     return "This Monday, I will, treck";
     
//     }
//     function mondayWalk(){
// console.log(mondayWalk)  
// return "go to the office"

//     }


function saturdayFun(target= "roller-skate"){
    return `This Saturday, I want to ${target}!`;
}

function mondayWork(uses = "go to the office"){
    return `This Monday, I will ${uses}.`
}

function wrapAdjective(result){
   
    return function(par = "special"){
       return `You are ${result}${par}${result}!`
   };
   
}