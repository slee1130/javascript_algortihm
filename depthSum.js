// Create a function that takes in an array and return its sum of contents.
// The array will be a non - empty array that contains either integers or other arrays of the same type.When calculating the the sum of the array, the result should be the sum of its elements, where the arrays inside are summed themselves and then multiplied by their level of "depth"

// The depth of the array element is how far nested it is.For example, the depth of[] is 1, the depth if the inner array[[]] is 2, the depth of a further inner array[[[]]] is 3 and so on

// The sum of[x, y] is x + y
// The sum of[x, [y, z]] is x + 2 * (y + z)
// The sum of[x, [y, [z]]] is x + 2 * (y + 3 * z)

// Example:

// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// sum = 12 // 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)


function depthSum(array, multiplier = 1){
    let sum = 0;
    for(const element of array){
        if(Array.isArray(element)){
            sum += depthSum(element, multiplier + 1);
        } else {
            sum += element;
        }
    }

    return sum * multiplier;
}

// O(N)