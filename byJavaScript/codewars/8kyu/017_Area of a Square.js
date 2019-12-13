/*
Complete the function that calculates the area of the red square, when the length of the
circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)


Test.describe("squareArea(2)", function() {
  Test.assertEquals(squareArea(2), 1.62);
});

Test.describe("squareArea(0)", function() {
  Test.assertEquals(squareArea(0), 0);
});

 */

function squareArea(A){
    let a = (2 * A) / Math.PI;
    let area = (a * a).toFixed(2);
    return area * 1;
}

console.log(squareArea(2));
console.log(squareArea(0));
console.log(squareArea(14.05));