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


//      (3)
function flatAndSortArray(array) {
    return array.flat(Infinity).sort((a, b) => a - b);
}
console.log(flatAndSortArray([[2, 3], 5, [[[2, 9], 4], 4], 1, 0]));

function newFlatAndSortArray(array) {
    return array.reduce(function (result, value) {
        if (Array.isArray(value)) {
            return result.concat(newFlatAndSortArray(value));
        } else {
            return result.concat(value);
        }
    }, []).sort((a, b) => a - b);
}
console.log(newFlatAndSortArray([[2, 3], 5, [[[2, 9], 4], 4], 1, 0]));


//      (4)
function findByItem(array, target) {
    let result = array.indexOf(target);
    return `{index:${result}, item:${target}}`
}
console.log(findByItem([2, 5, 4, 6, 3], 3));

function newFindByItem(array, target) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            result = i;
        }
    }
    return `{index:${result}, item:${target}}`;
}
console.log(newFindByItem([2, 5, 4, 6, 3], 3));


//      (5)
function replaceByItem(array, currentItem, newItem) {
    return array.map(function (value) {
        if (value === currentItem) {
            return newItem;
        } else {
            return value;
        }
    });
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(replaceByItem(arr, 'e', 't'));
