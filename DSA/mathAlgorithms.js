// Prime number
const arr = [1,5,3,2,9,7,6,4,59,77,11,2,4]
const prime = []
for(i=0;i<arr.length;i++){
    let isPrime = true
    if(arr[i]<2){
        continue
    }
    for(j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        prime.push(arr[i])
    }
}
console.log(prime);






//large secondLarge
// const arr = [23,45,56,67,87,100]
// let large = 0
// let secondLarge = 0

// for(i=0;i<arr.length;i++){
//     if(arr[i]>large){
//         secondLarge = large
//         large = arr[i]
//     }
// }
// console.log(large);
// console.log(secondLarge);



// third large
const array = [3,6,4,5,7,0]
let large = 0
let second = 0
let third = 0
for(i=0;i<array.length;i++){
    if(array[i]>large){
        third = second
        second = large
        large = array[i]
    }else if(array[i]>second){
        third = second 
        second = array[i]
    }else if(array[i]>third){
        third = array[i]
    }
}
console.log(large);
console.log(second);
console.log(third);



//sum od n numbers
// function sum(n){
//     if(n<1){
//         return n
//     }
//     return n+sum(n-1)
// }

// console.log(sum(5));


//factorial
// function factorial(n){
//     if(n<=1){
//         return n
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5));


//fibonacci
// function fibonacci(n){
//     if(n<=1){
//         return n
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(7));


//reverse String
// function reverse(string){
//     if(!string == ""){
//         return reverse(string.substr(1))+(string.charAt(0))
//     }else{
//         return ""
//     }
// }

// console.log(reverse("aswin"));



// const array =[1,2,4,6,8,9,10,11,13]

function isPal(str,i=0,j = str.length-1){
    if(i > j){
       return true
    }
    if(str[i] !== str[j]){
        return false
    }else{
       return isPal(str,i+1,j-1)
    }
}

console.log(isPal('malayalam'));
















