
Array.prototype.myEach = function(callback) {               // Here we are defining the my_each callback

    const arr = this

    for (counter = 0 ; counter < this.length; counter++) {

        // console.log(counter)

        ele = arr[counter]                  //  defining ele using the counter 

        callback(ele, counter);             // taking in the parameters here; defining the inuts here

    }

}

function testMyEach() {

    let arr = [1,2,3,4]

const outArray = []

const indexArray = []

arr.myEach(function(ele, i) {     // This is the function that is doign something .. ie adding one to each element
   ele += 1
   outArray.push(ele)
   indexArray.push(i)
})   


console.log(outArray, indexArray)
return outArray, indexArray

}

testMyEach();


Array.prototype.myMap = function(callback) {

    const outArray = []
    const inArray = this 

    for(let counter = 0; counter < this.length; counter++) {

        ele = inArray[counter]

        outArray.push(callback(ele));  //callback being proc.call and we are pushing in the ele and the counter (index)
    
    }

    return outArray

}

let arr = [1,2,3]
arr.myMap(function(ele){                        //another way to test it 

    ele * 10

})

function testmyMap() {

    let arr = [10, 11, 12, 13 ,14]

     function multiply10(num) {

        return num * 10

    }
    console.log(arr.myMap(function(ele) {
        return multiply10(ele)
    })) 
}
testmyMap();


Array.prototype.myReduce = function(callback, accumulator) {
    const arr = this;
    let startIndex = 0;
    if (!accumulator) {
        accumulator = arr[0];
        startIndex = 1;
    }

    this.slice(startIndex).myEach(function(ele) {
        accumulator = callback(ele, accumulator);
    })

    return accumulator;
} 

console.log([5,6,7,8,9,10].myReduce(function(ele, accumulator) {
    return ele + accumulator;
}, 10));