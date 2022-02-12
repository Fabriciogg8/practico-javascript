const originalPrice = 120; // Money
const discount = 18; // Percentage

function calculatePriceWithDiscount(originalPrice, discount){
    const finalPricePercentage = 100 - discount
    const finalPrice = (originalPrice * finalPricePercentage)/100;
    return finalPrice
}

// console.log({
//     originalPrice,
//     discount,
//     finalPricePercentage,
//     finalPrice
// });

