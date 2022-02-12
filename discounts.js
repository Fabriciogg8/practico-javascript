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

function discountPrice(){
    const inPrice = document.getElementById("inputPrice").value;
    const inDiscount = document.getElementById("inputDiscount").value;
    const discPrice = calculatePriceWithDiscount(inPrice, inDiscount);

    const finalPrice = document.getElementById("resultPrice");
    finalPrice.innerText = "The final price of your product is: $" + discPrice;
};