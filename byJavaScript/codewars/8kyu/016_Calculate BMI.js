/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
    let BMI = weight / (height * height);
    if(BMI <= 18.5) {
        return "Underweight";
    } else if(18.5 < BMI && BMI <= 25.0) {
        return "Normal";
    } else if (25.0 < BMI && BMI <= 30.0){
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bmi(85, 1.85));
console.log(bmi(80, 1.80));
console.log(bmi(58.8, 1.63));
