const operations = [100, -20, 7, -20, 50, 0]

let result = operations
    .filter(item => item > 0)
    .map(item => item * 60)

console.log(result);