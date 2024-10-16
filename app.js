const operations = [100, -20, 7б -30, 50];

const minElement = operations.reduce((acc, operation, i) => {
    if (operation > acc) {
        return acc;
    }
})