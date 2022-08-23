const removeFromArray = function(inputArray, ...removedArray) {
    for (const i of removedArray) {
        let index = inputArray.indexOf(i);
        if (index >= 0) {
            inputArray.splice(index, 1);
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
