const palindromes = function (testString) {
    letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    strippedArray = testString.toLowerCase().split("").filter(i => letters.includes(i));
    return strippedArray.join("") === strippedArray.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
