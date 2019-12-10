/*
You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!)
and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.


Test.describe("Basic tests",_=>{
Test.assertEquals(twoSort(["bitcoin", "take", "over", "the", "world", "maybe",
"who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );

Test.assertEquals(twoSort(["turns", "out", "random", "test", "cases", "are", "easier",
"than", "writing", "out", "basic", "ones"]), 'a***r***e');
});

 */

function twoSort(s) {
    s.sort();
    let a = s[0].split("").join("***");
    return a;
}

console.log(twoSort(["aitcoin", "Aake", "over", "the", "world", "maybe",
    "who", "knows", "perhaps"]))