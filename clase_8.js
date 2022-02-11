// Interacting with the HTML

// Square

function squarePerimeter(){
    const input = document.getElementById("InputSquare").value;
    const perimeter = input * 4;
    alert(perimeter);
};


function squareArea() {
    const input = document.getElementById("InputSquare").value;
    const area = input * input;
    alert(area);
};

// Triangle

function trianglePerimeter(){
    const input_1 = document.getElementById("InputTriangle_1").value;
    const input_2 = document.getElementById("InputTriangle_2").value;
    const input_base = document.getElementById("InputTriangle_base").value;
    const perimeter = Number(input_1) + Number(input_2) + Number(input_base)
    alert(perimeter);
};


function triangleArea() {
    const input_height = document.getElementById("InputTriangle_height").value;
    const input_base = document.getElementById("InputTriangle_base").value;
    const area = Number((input_height * input_base))/2;
    alert(area);
};

// Isosceles

function isoscelesPerimeter(){
    const isosceles_1 = document.getElementById("isosceles_1").value;
    const isosceles_2 = document.getElementById("isosceles_2").value;
    const isosceles_base = document.getElementById("isosceles_base").value;

    if (isosceles_1 === isosceles_2 || isosceles_2 === isosceles_base || isosceles_1 === isosceles_base) {
        
        const perimeter = Number(isosceles_1) + Number(isosceles_2) + Number(isosceles_base)
        alert(perimeter);
    } else {
        alert("For the isosceles triangle two of the sides must to be equals")
    }
};


function isoscelesArea() {
    const isosceles_height = document.getElementById("isosceles_height").value;
    const isosceles_base = document.getElementById("isosceles_base").value;

    const area = Number((isosceles_height * isosceles_base))/2;
    alert(area);
    
};

// Circle

function circumference() {
    const input_circle = document.getElementById("InputCircle").value;
    const PI = Math.PI;
    const diameter = Number(input_circle) * 2;
    alert(PI * diameter);
}


function circleArea(){
    const input_circle = document.getElementById("InputCircle").value;
    const PI = Math.PI;
    alert((input_circle ** 2) * PI)
}