



const twoSum = (arr, target) => {
    const leftover = {};

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];

        if (leftover[curr] !== undefined) {
            return [ i, leftover[current] ];
        }

        leftover[target - current] = i;
    }

    return;
};
