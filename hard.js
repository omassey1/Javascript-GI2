//define the mass and height for tom
let massTom = 8;
let heightTom = 9;

//define the mass and height for tom
let massJerry = 45;
let heightJerry = 10;

//calculate bmi for tom and jerry
let bmiTom = massTom / (heightTom * heightTom) ;
let bmiJerry = massJerry / (heightJerry * heightJerry) ;


//intiialze boolean with true
let tomBmiHigher = true;
//if to bmi is less
if(bmiTom <=  bmiJerry)
{
   //set boolean to false
   tomBmiHigher = false;
}

//print in console
console.log("Is Tom’s BMI higher than Jerry’s? " + tomBmiHigher);