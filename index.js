// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`
}
console.log(saturdayFun("swim"))
function mondayWork(work="go to the office"){
    return`This Monday, I will ${work}.`
}
function wrapAdjective(char='*'){
    return function(adj="special"){
      return `You are ${char}${adj}${char}!`
      
    } 
}