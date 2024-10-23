function multiply(x, y) {
  return x * y;
}
console.log(multiply(5, 6));

function checkAge(age) {
  if (age >= 18) {
    return "შენ ხარ სრულწლოვანი";
  } else {
    return "შენ ხარ არასრულწლოვანი";
  }
}

console.log(checkAge(20));

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "თქვენი რიცხვი ლუწია";
  } else {
    return "თქვენი რიცხვი კენტია";
  }
}

console.log(isEvenOrOdd(8));

function getDayName(dayNumber) {
  switch (true) {
    case dayNumber === "Monday":
      return " Monday";
      break;
    case dayNumber === "Tuesday":
      return " Tuesday";
      break;
    case dayNumber === " Wednesday":
      return "  Wednesday";
      break;
    case dayNumber === "Thursday":
      return " Thursday";
      break;
    case dayNumber === "Friday":
      return " Friday";
      break;
    case dayNumber === "Saturday":
      return " Saturday";
      break;
    case dayNumber === "Sunday":
      return " Sunday";
      break;

    default:
      return "Sure? :/";
      break;
  }
}

console.log(getDayName("Monday"));


function compareNumbers(a, b) {
    switch(true){
        case a > b:
            return `${a} > ${b}`   
            break;
            
        case a < b:
            return `${a} < ${b}`   
            break;
        
            default :
            return `${a} = ${b}` 
            break;
        }
        
        // if(a > b){
        //     return `${a } > ${b}`
        // }else if(a < b){
        //     return ` ${a} < ${b}`
        // }
        // else{
        // return `${a} = ${b}`
        // }
}

console.log(compareNumbers(6, 4))

