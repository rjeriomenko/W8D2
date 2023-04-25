Array.prototype.uniq = function() {
    let outArray = [];
    this.forEach(function(ele) {
        if (!outArray.includes(ele)) {
        outArray.push(ele);
        };
    });
    return outArray;
};

console.log([1,2,3,4,3,-1,2].uniq());

Array.prototype.twoSum = function() {
    const inArray = this;
    const outArray = [];

    this.forEach(function(ele, i) {
        let j = i + 1;
        while (j < inArray.length) {
            if (ele + inArray[j] === 0) {
            outArray.push([i,j]);
            };
        ++j 
        };
    });

    return outArray;
};

console.log([1, -1, 4, 5, 4, -2, -2, -3, 1, -5].twoSum());


//Transpose = first of each element becauses new row, second of each becomes new row
//Should take in an array of arrays

Array.prototype.transpose = function() {
    const outArray = []

    this.forEach(function(subArr, i) {
        let j = 0;
        while(j < subArr.length ) {
            outArray[j] ||= [];
            outArray[j].push(subArr[j]);
            ++j;
        };
    });

    return outArray;
};

console.log([[1,2],[3,4]].transpose())