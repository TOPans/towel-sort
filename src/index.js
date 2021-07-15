module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let towArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            towArr.push(matrix[i].reverse());
        } else {
            towArr.push(matrix[i]);
        }
    }
    return towArr.flat();
};
