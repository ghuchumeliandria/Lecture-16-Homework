// მეტი მრავალფეროვნებისთვის მასივებით გავაკეთე ზოგი დავალება :დდ

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
  switch (true) {
    case a > b:
      return `${a} > ${b}`;
      break;

    case a < b:
      return `${a} < ${b}`;
      break;

    default:
      return `${a} = ${b}`;
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

console.log(compareNumbers(6, 4));

function calculator(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return `აირჩიე სწორი ოპერატორი`;
  }
}

console.log(calculator(3, 9, "*"));

// ravi ase gavakete me

function celsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return ` ${fahrenheit} °F `;
}
let fahrenheit;
console.log(celsiusToFahrenheit(32));

function findMax(a, b, c) {
  //   if (a > b && a > c) {
  //     return a;
  //   } else if (b > a && b > c) {
  //     return b;
  //   } else {
  //     return c;
  //   }
  // }

  switch (true) {
    case a > b && a > c:
      return a;
      break;
    case b > a && b > c:
      return b;
    default:
      return c;
      break;
  }
}

//  let max =  Math.max(a,b,c);
//  return max;
//  ეს მეთოდი დავსერჩე და ისე ვნახე არვიცი ვისწავლეთ თუ არა მარა წინა ორს კი ჯობია :D

console.log(findMax(45, 12, 74));

function checkSign(num) {
  if (num >= 0) {
    return `${num} is a positive number`;
  } else {
    return `${num} is a negative number`;
  }
}

console.log(checkSign(4));

let monthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function getMonthName(monthNumber) {
  switch (monthNumber) {
    case (monthNumber = 1):
      return `January`;
      break;
    case (monthNumber = 2):
      return `February`;
      break;
    case (monthNumber = 3):
      return `March`;
      break;
    case (monthNumber = 4):
      return `April`;
      break;
    case (monthNumber = 5):
      return `May`;
      break;
    case (monthNumber = 6):
      return `June`;
      break;
    case (monthNumber = 7):
      return `July`;
      break;
    case (monthNumber = 8):
      return `August`;
      break;
    case (monthNumber = 9):
      return `September`;
      break;
    case (monthNumber = 10):
      return `October`;
      break;
    case (monthNumber = 11):
      return `November`;
      break;
    case (monthNumber = 12):
      return `December`;
      break;
    default:
      return "Undefined";
      break;
  }
}
console.log(getMonthName(monthNumber[9]));

function multiplyIfGreaterThanFive(num) {
  if (num >= 5) {
    return num * 10;
  } else {
    return `The number is small`;
  }
}
console.log(multiplyIfGreaterThanFive(2));

function getSeason(seasonNumber) {
  switch (seasonNumber) {
    case (seasonNumber = 1):
      return `Spring`;
      break;
    case (seasonNumber = 2):
      return `Summer`;
      break;
    case (seasonNumber = 3):
      return `Autumn`;
      break;
    case (seasonNumber = 4):
      return `Winter`;
      break;
    default:
      return `ERRROOORR`;
      break;
  }
}
let seasonNumbers = [1, 2, 3, 4];
console.log(getSeason(seasonNumbers[2]));

function switchCalculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    default:
      return `Your operator is undefined`;
      break;
  }
}

let ops = ["+", "-", "/", "*"];

console.log(calculator(3, 4, ops[3]));

function positiveSum(a, b) {
  if (a >= 0 && b >= 0) {
    return a + b;
  } else {
    return `მინიმუმ ერთი რიცხვი უარყოფითია`;
  }
}
console.log(positiveSum(3, 4));
