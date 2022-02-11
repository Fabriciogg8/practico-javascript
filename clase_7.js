// Square code
console.group("Squares")

function squarePerimeter(squareSide){
    return squareSide * 4;
};

console.log("The perimeter of the square measures: " + squarePerimeter(4) + "cm")


function squareArea(squareSide) {
    return squareSide * squareSide
};

console.log("The area of the square measures: " + squareArea(4) + "cm2")

console.groupEnd();

// Triangle code

console.group("Triangle")

const triangleSide_1 = 6;
const triangleSide_2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

function trianglePerimeter(triangleSide_1, triangleSide_2, triangleBase){
    return triangleSide_1 + triangleSide_2 + triangleBase
};

console.log("The perimeter of the triangle measures: " 
+ trianglePerimeter(triangleSide_1, triangleSide_2, triangleBase) 
+ "cm"
);

function triangleArea(triangleHeight, triangleBase){
    return (triangleHeight * triangleBase)/2;
}

console.log("The area of the triangle measures: " + triangleArea(triangleHeight, triangleBase) + "cm2")

console.groupEnd();

// Circle code

console.group("Circle")

const circleRadium = 4;

function cricleDiameter(circleRadium){
    return circleRadium * 2;
}

console.log("The diameter of the circle measures: " + cricleDiameter(circleRadium) + "cm")

const pi = 3.1416;
// Another way to get PI
const PI = Math.PI;

function circumference(circleRadium) {
    const PI = Math.PI;
    const diameter = cricleDiameter(circleRadium);
    return PI * diameter;
}

console.log("The circumference of the circle measures: " + circumference(circleRadium) + "cm")

function circleArea(circleRadium){
    const PI = Math.PI;
    return (circleRadium ** 2) * PI
}

console.log("The area of the circle measures: " + circleArea(circleRadium) + "cm2")

console.groupEnd();