/*
Write function makeUpperCase.
 */

function makeUpperCase(str) {
    let lowerarr = str.split("");
    let upperarr = lowerarr.map(item => {
        let assic = item.charCodeAt();
        if(assic >= 97 && assic <= 122) {
            assic = assic - 32;
        } else {
            assic = assic;
        }
        let upperItem = String.fromCharCode(assic);
        return upperItem;
    })
    return upperarr.join("");
}

console.log(makeUpperCase("hello"));
console.log(makeUpperCase("qIN"));