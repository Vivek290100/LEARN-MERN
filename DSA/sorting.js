

// Algorithm	  BestCase	  Average Case	 Worst Case	  Space Complexity
// Bubble Sort	  O(n)	      O(n²)	         O(n²)	      O(1)
// Insertion Sort O(n)	      O(n²)	         O(n²)	      O(1)
// Selection Sort O(n²)	      O(n²)	         O(n²)	      O(1)
// Quick Sort	  O(n log n)  O(n log n)     O(n²)	      O(log n)
// Merge Sort	  O(n log n)  O(n log n)     O(n log n)	  O(n)

// BinarySearch O(log n)



//bubble sort   
//Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.
function bubble(array){
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}

console.log("bubble",bubble([34,34,34,545,567,678,68,78]));

//InsertionSort   
// The Insertion Sort - one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.
function insertion(arr){
    for(i=0;i<arr.length;i++){
        for(j=i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j], arr[j-1]]=[arr[j-1],arr[j]]
            }
        }
    }
    return arr
}

console.log("insertion",insertion([2345,345,45,456,4,345,34,3]));



//The Selection Sort -select lowest value in an array and moves it to the front of the array.   
function selection(arr){
    for(i=0;i<arr.length;i++){
        let lowest = i
        for(j=i+1;j<arr.length;j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if(lowest!=i){
            [arr[i],arr[lowest]] = [arr[lowest],arr[i]]
        }
    }
    return arr
}

console.log("selection",selection([345,43,345,23,5245,34,5]));




//Quick Sort   
//Average Case: O(n log n)
//Worst Case  : O(n²) (when the pivot is the smallest or largest element, such as in a sorted array)
function quick(arr){
    if(arr.length <=1){
        return arr
    }
    const pivot = arr[0]
    let left = []
    let right = []

    for(i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

console.log("quick",quick([2,5,1,4,3]));



//mergeSort
//O(n log n)
function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice( mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}

console.log("merge",mergeSort([345,5,6,5434,352,346,346,132]));


