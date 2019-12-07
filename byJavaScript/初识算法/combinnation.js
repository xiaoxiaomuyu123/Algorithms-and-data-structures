// 求 数组 s 中取出 k 个值，有多少种组合 （求子集的问题）
function combinnation(s, k) {
    if(k === 0 || k === s.length) {
        return [ s.slice(0, k) ];
    }
    let r = [];
    let [first, ...others] = s;
    r = r.concat( combinnation(others, k-1).map(c => [first, ...c]));
    r = r.concat( combinnation(others, k));
    return r;
}

const s = ['a', 'b', 'c', 'd'];
console.log(combinnation(s, 2))