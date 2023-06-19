let random_Num=Math.floor(Math.random()*101)
let number,c=1
do{
  number=prompt("Enter a number : ")
  if(number==random_Num){
    console.log(`Congratulatio! You guess the number in ${c} attempt`)
  }
    else if(number>random_Num){
    console.log("You guess bigger number")
    }else{
    console.log("You guess smaller number")
    }
  c++;
  }
  while(number!=random_Num)
