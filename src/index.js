module.exports = function reverse (n) {
    let new_n = n.toString().split('').reverse().join('');
    return parseInt(new_n);
}
