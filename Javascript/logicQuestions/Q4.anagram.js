const a = "boy";
const b = "oyw";

let allExist = true;

for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
        allExist = false;
        break;
    }
}

console.log(allExist);
