function binarySearch(array,target){
    let start = 0
    let end = array.length-1

    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(array[mid]==target){
            return mid
        }else if(array[mid] < target){
            start = mid+1
        }else{
            end = mid-1
        }
    }
    return -1
}
console.log(binarySearch([1,2,4,5,6,8,9,10,40,200],200));



function btree(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (array[mid] == target) {
      return array[mid];
    } else if (array[mid] < target) {
        start = mid + 1;
    }else {
        end = mid - 1;
    }
  }
  return -1
}

console.log(btree([12, 15, 17, 45, 67, 78], 67));

