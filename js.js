function mergesort(arr){
    if(arr.length <=1){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return (merge(mergesort(left),mergesort(right)))
}

function merge(left, right){
    let result = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}

console.log(mergesort([3,234,456,87,879,879,4,56,23,5]));
