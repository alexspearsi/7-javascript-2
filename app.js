function getCoffees() {
    document.querySelector('div').textContent = '';
    fetch('./coffees.json')
        .then(response => response.json())
        .then(response => {
            response.forEach(element =>
                document.querySelector('div').innerHTML += `<h1>${element.name} = ${element.price}</h1>`
            )
        })
}