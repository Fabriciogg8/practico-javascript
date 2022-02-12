function calculatePriceWithDiscount(originalPrice, discount){
    const finalPricePercentage = 100 - discount
    const finalPrice = (originalPrice * finalPricePercentage)/100;
    return finalPrice
}

coupons = [{
    name: "Batman",
    discount: "10"
},
{
    name: "Seiya",
    discount: "15"
},
{
    name: "Hyoga",
    discount: "20"
}];


function discountPrice(){
    const inDiscount = document.getElementById("inputDiscount").value;
    
    const findDiscount = coupons.find(function(coupon){
        return coupon.name === inDiscount})

    if(typeof findDiscount === "undefined" ){
    const finalPrice = document.getElementById("resultPrice");
    finalPrice.innerText = "Your discount doesn't work. Please enter a real coupon name";
    } else {
    const inPrice = document.getElementById("inputPrice").value;
    const coupon = findDiscount.discount
    const discPrice = calculatePriceWithDiscount(inPrice, coupon);

    const finalPrice = document.getElementById("resultPrice");
    finalPrice.innerText = "The final price of your product is: $" + discPrice;
}};