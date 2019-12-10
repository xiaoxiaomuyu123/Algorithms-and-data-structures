/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear
its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all

When the last petal was torn there were cries of excitement, dreams, surging thoughts and
emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a
given number of petals, where nb_petals > 0.

 */

function howMuchILoveYou1(nbPetals) {
    let a = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let i;
    if(nbPetals < 7) {
        i = nbPetals - 1;
    } else if(nbPetals % 6 === 0) {
        i = 5;
    } else {
        i = nbPetals % 6 - 1;
    }

    return a[i]
}

function howMuchILoveYou(nbPetals) {
    let a = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let i;
    if(nbPetals % 6 === 0) {
        i = 5;
    } else {
        i = nbPetals % 6 - 1;
    }
    return a[i];
}

console.log(howMuchILoveYou(7));  //  'I love you'
console.log(howMuchILoveYou(3));  //  'a lot'
console.log(howMuchILoveYou(8));  //  'a little'
console.log(howMuchILoveYou(6));  //  'not at all'
console.log(howMuchILoveYou(150));  //  'not at all'