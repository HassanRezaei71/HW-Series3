//      (1)
function deleteByIndex(array, target) {
    return array.filter(function (value, index) {
        if (index != target) {
            return value;
        }
    });
}

console.log(deleteByIndex([1, 2, 3], 1));

function newDeleteByIndex(array, target) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (i != target) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(newDeleteByIndex([1, 2, 3], 1));


//      (2)
function combineAndSortArrays() {
    let result = [].concat(...arguments);
    return result.sort(function (a, b) {
        return a - b;
    })
}

console.log(combineAndSortArrays([1, 2, 3], [4, 5, 6], [9, 8, 7, 0]));

function newCombineAndSortArrays() {
    let result = [];
    let temp = 0;
    for (let i = 0; i < arguments.length; i++) {
        result.push(...arguments[i]);
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j] > result[j + 1]) {
                temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}
console.log(newCombineAndSortArrays([4, 3, 2], [9, 6, 7, 5], [8, 1, 10]));


