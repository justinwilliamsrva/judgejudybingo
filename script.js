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
var ex5;
var ex6;
var ex7;
var ex8;
var ex9;
var ex10;
var ex11;
var ex12;
var ex13;
var ex14;
var ex15;
exa1();
exa2();
exa3();
exa4();
exa5();
exa6();
exa7();
exa8();
exa9();
exa10();
exa11();
exa12();
exa13();
exa14();
exa15();

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

function exa5() {
    ex5 = cases[Math.floor(Math.random() * cases.length)];
    if (ex5 === ex || ex5 == ex1 || ex5 == ex2 || ex5 == ex3 || ex5 == ex4) {
        exa5();
    } else {
        document.getElementById("box2_2").innerHTML = ex5;
    }
}

function exa6() {
    ex6 = cases[Math.floor(Math.random() * cases.length)];
    if (ex6 === ex || ex6 == ex1 || ex6 == ex2 || ex6 == ex3 || ex6 == ex4 || ex6 == ex5) {
        exa6();
    } else {
        document.getElementById("box2_3").innerHTML = ex6;
    }
}

function exa7() {
    ex7 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex7 === ex ||
        ex7 == ex1 ||
        ex7 == ex2 ||
        ex7 == ex3 ||
        ex7 == ex4 ||
        ex7 == ex5 ||
        ex7 == ex6
    ) {
        exa7();
    } else {
        document.getElementById("box2_4").innerHTML = ex7;
    }
}

function exa8() {
    ex8 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex8 === ex ||
        ex8 == ex1 ||
        ex8 == ex2 ||
        ex8 == ex3 ||
        ex8 == ex4 ||
        ex8 == ex5 ||
        ex8 == ex6 ||
        ex8 == ex7
    ) {
        exa8();
    } else {
        document.getElementById("box3_1").innerHTML = ex8;
    }
}

function exa9() {
    ex9 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex9 === ex ||
        ex9 == ex1 ||
        ex9 == ex2 ||
        ex9 == ex3 ||
        ex9 == ex4 ||
        ex9 == ex5 ||
        ex9 == ex6 ||
        ex9 == ex7 ||
        ex9 == ex8
    ) {
        exa9();
    } else {
        document.getElementById("box3_2").innerHTML = ex9;
    }
}

function exa10() {
    ex10 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex10 === ex ||
        ex10 == ex1 ||
        ex10 == ex2 ||
        ex10 == ex3 ||
        ex10 == ex4 ||
        ex10 == ex5 ||
        ex10 == ex6 ||
        ex10 == ex7 ||
        ex10 == ex8 ||
        ex10 == ex9
    ) {
        exa10();
    } else {
        document.getElementById("box3_3").innerHTML = ex10;
    }
}

function exa11() {
    ex11 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex11 === ex ||
        ex11 == ex1 ||
        ex11 == ex2 ||
        ex11 == ex3 ||
        ex11 == ex4 ||
        ex11 == ex5 ||
        ex11 == ex6 ||
        ex11 == ex7 ||
        ex11 == ex8 ||
        ex11 == ex9 ||
        ex11 == ex10
    ) {
        exa11();
    } else {
        document.getElementById("box3_4").innerHTML = ex11;
    }
}

function exa12() {
    ex12 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex12 === ex ||
        ex12 == ex1 ||
        ex12 == ex2 ||
        ex12 == ex3 ||
        ex12 == ex4 ||
        ex12 == ex5 ||
        ex12 == ex6 ||
        ex12 == ex7 ||
        ex12 == ex8 ||
        ex12 == ex9 ||
        ex12 == ex10 ||
        ex12 == ex11
    ) {
        exa12();
    } else {
        document.getElementById("box4_1").innerHTML = ex12;
    }
}

function exa13() {
    ex13 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex13 === ex ||
        ex13 == ex1 ||
        ex13 == ex2 ||
        ex13 == ex3 ||
        ex13 == ex4 ||
        ex13 == ex5 ||
        ex13 == ex6 ||
        ex13 == ex7 ||
        ex13 == ex8 ||
        ex13 == ex9 ||
        ex13 == ex10 ||
        ex13 == ex11 ||
        ex13 == ex12
    ) {
        exa13();
    } else {
        document.getElementById("box4_2").innerHTML = ex13;
    }
}

function exa14() {
    ex14 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex14 === ex ||
        ex14 == ex1 ||
        ex14 == ex2 ||
        ex14 == ex3 ||
        ex14 == ex4 ||
        ex14 == ex5 ||
        ex14 == ex6 ||
        ex14 == ex7 ||
        ex14 == ex8 ||
        ex14 == ex9 ||
        ex14 == ex10 ||
        ex14 == ex11 ||
        ex14 == ex12 ||
        ex14 == ex13
    ) {
        exa14();
    } else {
        document.getElementById("box4_3").innerHTML = ex14;
    }
}

function exa15() {
    ex15 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex15 === ex ||
        ex15 == ex1 ||
        ex15 == ex2 ||
        ex15 == ex3 ||
        ex15 == ex4 ||
        ex15 == ex5 ||
        ex15 == ex6 ||
        ex15 == ex7 ||
        ex15 == ex8 ||
        ex15 == ex9 ||
        ex15 == ex10 ||
        ex15 == ex11 ||
        ex15 == ex12 ||
        ex15 == ex13 ||
        ex15 == ex14
    ) {
        exa15();
    } else {
        document.getElementById("box4_4").innerHTML = ex15;
    }
}

// Background

document.getElementById("box1_1").addEventListener("click", () => {
    document.getElementById("box1_1").classList.toggle("red");

    red();
});

document.getElementById("box1_2").addEventListener("click", () => {
    document.getElementById("box1_2").classList.toggle("red");

    red();
});

document.getElementById("box1_3").addEventListener("click", () => {
    document.getElementById("box1_3").classList.toggle("red");

    red();
});
document.getElementById("box1_4").addEventListener("click", () => {
    document.getElementById("box1_4").classList.toggle("red");

    red();
});
document.getElementById("box2_1").addEventListener("click", () => {
    document.getElementById("box2_1").classList.toggle("red");

    red();
});

document.getElementById("box2_2").addEventListener("click", () => {
    document.getElementById("box2_2").classList.toggle("red");

    red();
});
document.getElementById("box2_3").addEventListener("click", () => {
    document.getElementById("box2_3").classList.toggle("red");

    red();
});
document.getElementById("box2_4").addEventListener("click", () => {
    document.getElementById("box2_4").classList.toggle("red");

    red();
});

document.getElementById("box3_1").addEventListener("click", () => {
    document.getElementById("box3_1").classList.toggle("red");

    red();
});

document.getElementById("box3_2").addEventListener("click", () => {
    document.getElementById("box3_2").classList.toggle("red");

    red();
});

document.getElementById("box3_3").addEventListener("click", () => {
    document.getElementById("box3_3").classList.toggle("red");

    red();
});

document.getElementById("box3_4").addEventListener("click", () => {
    document.getElementById("box3_4").classList.toggle("red");

    red();
});

document.getElementById("box4_1").addEventListener("click", () => {
    document.getElementById("box4_1").classList.toggle("red");

    red();
});

document.getElementById("box4_2").addEventListener("click", () => {
    document.getElementById("box4_2").classList.toggle("red");

    red();
});

document.getElementById("box4_3").addEventListener("click", () => {
    document.getElementById("box4_3").classList.toggle("red");

    red();
});

document.getElementById("box4_4").addEventListener("click", () => {
    document.getElementById("box4_4").classList.toggle("red");

    red();
});

// Bingo Function
function red() {
    if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box1_2").classList.contains("red") &&
        document.getElementById("box1_3").classList.contains("red") &&
        document.getElementById("box1_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box2_1").classList.contains("red") &&
        document.getElementById("box3_1").classList.contains("red") &&
        document.getElementById("box4_1").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_2").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box3_2").classList.contains("red") &&
        document.getElementById("box4_2").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_3").classList.contains("red") &&
        document.getElementById("box2_3").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box4_3").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_4").classList.contains("red") &&
        document.getElementById("box2_4").classList.contains("red") &&
        document.getElementById("box3_4").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_4").classList.contains("red") &&
        document.getElementById("box2_3").classList.contains("red") &&
        document.getElementById("box3_2").classList.contains("red") &&
        document.getElementById("box4_1").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box2_1").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box2_3").classList.contains("red") &&
        document.getElementById("box2_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box3_1").classList.contains("red") &&
        document.getElementById("box3_2").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box3_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box4_1").classList.contains("red") &&
        document.getElementById("box4_2").classList.contains("red") &&
        document.getElementById("box4_3").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else {
        document.getElementById("bingo").innerHTML = "";
    }
}
