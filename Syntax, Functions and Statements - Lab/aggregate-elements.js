function aggregateElements(array) {
    function sum(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        console.log(result);
    }

    function inverseSum(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            result += (1 / array[i]);
        }
        console.log(result);
    }

    function concatenate(array) {
        console.log(array.join(''));
    }

    sum(array);
    inverseSum(array);
    concatenate(array);
}

inverseSum([1, 2, 3])