function searchById(id) {
    for (let product of products) {
        if (product[0] === id) {
            return product
            
        }
    } 
    return `Product no `

}

let products = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16],[17, 18, 19, 20]];

console.log(searchById(9))
