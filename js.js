const nums = [4,5,2,45,67,0,7,3,2,1,54,76,78,]

function even(nums){
    if(nums.length==0){
        return 0
    }
    if(isEven(nums[0])){
        return nums[0]+ even(nums.slice(1))
    }else{
        return even(nums.slice(1))
    }
}

function isEven(num){
    if(num%2==0){
        return true
    }else{
        false
    }
}

console.log(even(nums));