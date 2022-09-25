/*

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

 */

function points(games) {
    let result = games.reduce((pre, cur) => {
        let arrItem = cur.split(':');
        let cha = arrItem[0] * 1 - arrItem[1] * 1;
        if(cha > 0) {
            return pre + 3;
        } else if(cha === 0) {
            return pre + 1;
        } else {
            return pre
        }
    }, 0)
    return result
}

console.log(points(['1:0','2:0','3:0','4:0']))