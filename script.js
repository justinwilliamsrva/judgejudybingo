var cases = [
    "Don't Speak",
    "Mentions her looks or age",
    "Car Case",
    "Dog Case",
    "Former Friend",
    "Family Suit",
    "Rent Case",
    "You ate the Steak",
    "I don't believe you",
    "Were Done Here",
    "Pit Bull/Aggressive Breed Story",
    "Uncross Your Arms",
    "Um is not answer",
    "I don't care if",
    "Hearsay",
    "Slander",
    "Emotional Distress",
];

var ex = cases[Math.floor(Math.random() * cases.length)];
document.getElementById("box1_1").innerHTML = ex;
var ex1;
var ex2;
var ex3;
var ex4;
exa1();
exa2();
exa3();
exa4();

function exa1() {
    ex1 = cases[Math.floor(Math.random() * cases.length)];
    if (ex === ex1) {
        exa1();
    } else {
        document.getElementById("box1_2").innerHTML = ex1;
    }
}
function exa2() {
    ex2 = cases[Math.floor(Math.random() * cases.length)];
    if (ex2 === ex || ex2 == ex1) {
        exa2();
    } else {
        document.getElementById("box1_3").innerHTML = ex2;
    }
}

function exa3() {
    ex3 = cases[Math.floor(Math.random() * cases.length)];
    if (ex3 === ex || ex3 == ex1 || ex3 == ex2) {
        exa3();
    } else {
        document.getElementById("box1_4").innerHTML = ex3;
    }
}
function exa4() {
    ex4 = cases[Math.floor(Math.random() * cases.length)];
    if (ex4 === ex || ex4 == ex1 || ex4 == ex2 || ex4 == ex3) {
        exa4();
    } else {
        document.getElementById("box2_1").innerHTML = ex4;
    }
}

// Background

document.getElementById("box1_1").addEventListener("click", () => {
    color = !color;

    if (color == true) {
        document.getElementById("box1_1").classList.add("red");
    } else {
        document.getElementById("box1_1").classList.remove("red");
    }

    red();
});


document.getElementById("box1_2").addEventListener("click", () => {
    color = !color;

    if (color == true) {
        document.getElementById("box1_2").classList.add("red");
    } else {
        document.getElementById("box1_2").classList.remove("red");
    }

    red();
});

let color = false;

function red() {
    if (document.getElementById("box1_1").classList.contains("red") &&document.getElementById("box1_2").classList.contains("red") ) {
        alert("hi");
    }
}
