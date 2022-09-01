const fibonacci = function(num) {
    const sequence = [1,1]
    // Check if value is one of the first two entries or a negative number
    if (num < 0) return "OOPS";
    if (num < 2) return 1;    

    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence[sequence.length - 1];
};

fibonacci(5);

// Do not edit below this line
module.exports = fibonacci;
