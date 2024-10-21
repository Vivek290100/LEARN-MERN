
// [123, 345, 876, 456];
function reverse(arr){
    let reversedArray = []
    for(let i=arr.length-1;i>=0;i--){
        let num = arr[i]
        let reverseNum = 0
        while(num>0){
            let remainder= num%10
            reverseNum = reverseNum*10+remainder
            num = Math.floor(num/10)
        }
        reversedArray.push(reverseNum)
    }
    return reversedArray
}
console.log(reverse([123, 345, 876, 456])); //[ 654, 678, 543, 321 ]




