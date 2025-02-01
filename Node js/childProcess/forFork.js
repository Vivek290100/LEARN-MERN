
// for fork
let j = 0;
for (let i = 0; i < 20000000000; i++) {
  j++;
}
process.send(j)

