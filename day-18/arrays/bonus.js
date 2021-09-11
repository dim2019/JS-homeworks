var rotate = (arr, count) => {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};

const arr = [1, 2, 3, 4, 5];
console.log(rotate(arr, -1));