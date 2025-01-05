function maxElement(arr1,arr2){
    let newArray =[...arr1,...arr2];
    let maxNumber = Math.max(...newArray);
    return maxNumber;
}

const first =[8,5,9,2];
const second =[5,7,3,9,1];

const result = maxElement(first,second);
console.log(result);