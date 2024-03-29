/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation...
but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer,
and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not
make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with
"£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua)
 or "¥" (Rust).


Test.describe("Basic tests",_=>{
Test.assertEquals(bonusTime(10000, true), '£100000');
Test.assertEquals(bonusTime(25000, true), '£250000');
Test.assertEquals(bonusTime(10000, false), '£10000');
Test.assertEquals(bonusTime(60000, false), '£60000');
Test.assertEquals(bonusTime(2, true), '£20');
Test.assertEquals(bonusTime(78, false), '£78');
Test.assertEquals(bonusTime(67890, true), '£678900');
})
 */

function assertEquals(salay, bonus) {
    if(bonus) {
        return '£' + salay * 10;
    } else {
        return '£' + salay
    }
}

console.log(assertEquals(20, false));