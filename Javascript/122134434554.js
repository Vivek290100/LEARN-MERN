let array = []
let count = 0

while(count < 10){
    let first = count*2+1
    let second = first+1

    array[array.length] = first
    array[array.length] = second
    array[array.length] = second
    array[array.length] = first
    count++
}
console.log(array);


