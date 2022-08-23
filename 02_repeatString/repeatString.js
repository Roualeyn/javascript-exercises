const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let result = "";
    for (let i = 0; i < num; i++){
        result = result + string;
    }
    return result;
};

repeatString("hyey", 2);
// Do not edit below this line
module.exports = repeatString;
