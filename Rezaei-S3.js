//      (1)
function deleteByIndex(array,target) {
    return array.filter(function (value,index) {
        if(index != target){
            return value;
        }
    });
}
console.log(deleteByIndex([1,2,3],1));

function newDeleteByIndex(array,target) {
    let result = [];
    for(let i=0;i<array.length;i++){
        if(i != target){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(newDeleteByIndex([1,2,3],1));