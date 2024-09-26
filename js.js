const arr = [1,5,3,2,9,7,6,4,59,77,11,2,4]
const prime = []

for(i=0;i<arr.length;i++){
    let isPrime = true
    // if(arr[i]<2){
    //     continue
    // }
    for(j=2;j<arr[i];j++){
        if(arr[i]%j==0){
           isPrime = false
           break
        }
    }
    if(isPrime==false){
        prime.push(arr[i])
    }
}

console.log(prime);
