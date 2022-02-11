// Código del cuadrado
console.group("Squares")

const squareSide = 5;

console.log("The sides of the square measures: " + squareSide + "cm")

const squarePerimeter = squareSide * 4;

console.log("The perimeter of the square measures: " + squarePerimeter + "cm")

const squareArea = squareSide * squareSide;

console.log("The area of the square measures: " + squareArea + "cm2")

console.groupEnd();

// Código del triangulo

console.group("Triangle")

const triangleSide_1 = 6;
const triangleSide_2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log("The sides of the triangle measures: " + triangleSide_1 + "cm, and " + triangleSide_2 + "cm.")
console.log("The base of the triangle measures: " + triangleBase + "cm")
console.log("The height of the triangle measures: " + triangleHeight + "cm")

const trianglePerimeter = triangleSide_1 + triangleSide_2 + triangleBase;

console.log("The perimeter of the triangle measures: " + trianglePerimeter + "cm")

const triangleArea = (triangleHeight * triangleBase)/2;

console.log("The area of the triangle measures: " + triangleArea + "cm2")

console.groupEnd();

// Código del Circulo

console.group("Circle")

const circleRadium = 4;

console.log("The radium of the circle measures: " + circleRadium + "cm")

const cricleDiameter = circleRadium * 2; 

console.log("The diameter of the circle measures: " + cricleDiameter + "cm")

const pi = 3.1416;
// Another way to get PI
const PI = Math.PI;

console.log("The value of Pi is: " + PI )

const circumference = PI * cricleDiameter

console.log("The circumference of the circle measures: " + circumference + "cm")

const circleArea = (circleRadium ** 2) * PI

console.log("The area of the circle measures: " + circleArea + "cm2")

console.groupEnd();