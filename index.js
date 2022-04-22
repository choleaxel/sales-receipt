const subtotal = 99.75;
const taxRate = 0.07;

function calculateTax(subtotal, taxRate) {
    const tax = subtotal * taxRate;
    return tax;
}

function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}


const myTax = calculateTax(19.75, 0.07);
const myTotal = calculateTotal(subtotal, myTax);



console.log('Subtotal:      ', subtotal.toFixed(2));
console.log('Tax:           ',  myTax.toFixed(2));
console.log('-----------------------------')
console.log('Total:         ', myTotal.toFixed(2));