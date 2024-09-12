function multiplier(a) {
    return function (b) {
        return a * b
    }
}

const aa = multiplier(4)
const bb = multiplier(7)

console.log(aa(2));
console.log(bb(2));
