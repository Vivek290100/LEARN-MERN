const arr = [3, 5, 0, 8, 6, 0, 0, 8, 0, 9, 0];
// O(n)

// function fun(arr){
//     let ind = 0
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!=0){
//             arr[ind] = arr[i]
//             ind++
//         }
//     }
//     for (let i = ind; i < arr.length; i++) {
//         arr[i] = 0
//     }
//     return arr
// }
// console.log(fun());


// function fun() {
//   let ind = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//       if (i != ind) {
//         [arr[i], arr[ind]] = [arr[ind], arr[i]];
//       }
//       ind++;
//     }
//   }
//   return arr;
// }
// console.log(fun());

const s = ")()"
let open = 0
    let close = 0
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            open++
        }else if(s[i]==")"){
            close++
        }else{
            return 0
        }
    }
    return  Math.min(open, close)*2


