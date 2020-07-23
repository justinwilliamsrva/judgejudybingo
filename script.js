var cases = [
    '"Don\'t Speak" or Shh-ing',
    "Mentions her looks or age",
    "Car Case",
    "Dog Case",
    "Former Friend",
    "Family Suit",
    "Rent Case",
    '"You ate the Steak"',
    '"I don\'t believe you"',
    '"We\'re Done Here"',
    "Aggressive Dog Breed",
    "Uncross arms, hand down, rolling eyes",
    '"Um is not an answer"',
    '"I don\'t care"',
    "Hearsay",
    "Slander",
    "Emotional Distress",
    "Horse Case",
    "Former Lovers",
    "Byrd Speaks",
    "Case dismissed",
    "Counter claim dismissed",
    "'You don't know where I am going with this'",
    "Contract Mentioned",
    "Child involved",
    "Litigants talk to each other",
    "\'It's a yes or no question\'",
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
var ex16;
var ex17;
var ex18;
var ex19;
var ex20;
var ex21;
var ex22;
var ex23;

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
exa16();
exa17();
exa18();
exa19();
exa20();
exa21();
exa22();
exa23();

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
        document.getElementById("box5_1").innerHTML = ex10;
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

function exa16() {
    ex16 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex16 === ex ||
        ex16 == ex1 ||
        ex16 == ex2 ||
        ex16 == ex3 ||
        ex16 == ex4 ||
        ex16 == ex5 ||
        ex16 == ex6 ||
        ex16 == ex7 ||
        ex16 == ex8 ||
        ex16 == ex9 ||
        ex16 == ex10 ||
        ex16 == ex11 ||
        ex16 == ex12 ||
        ex16 == ex13 ||
        ex16 == ex14 ||
        ex16 == ex15
    ) {
        exa16();
    } else {
        document.getElementById("box1_5").innerHTML = ex16;
    }
}

function exa17() {
    ex17 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex17 === ex ||
        ex17 == ex1 ||
        ex17 == ex2 ||
        ex17 == ex3 ||
        ex17 == ex4 ||
        ex17 == ex5 ||
        ex17 == ex6 ||
        ex17 == ex7 ||
        ex17 == ex8 ||
        ex17 == ex9 ||
        ex17 == ex10 ||
        ex17 == ex11 ||
        ex17 == ex12 ||
        ex17 == ex13 ||
        ex17 == ex14 ||
        ex17 == ex15 ||
        ex17 == ex16
    ) {
        exa17();
    } else {
        document.getElementById("box2_5").innerHTML = ex17;
    }
}

function exa18() {
    ex18 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex18 === ex ||
        ex18 == ex1 ||
        ex18 == ex2 ||
        ex18 == ex3 ||
        ex18 == ex4 ||
        ex18 == ex5 ||
        ex18 == ex6 ||
        ex18 == ex7 ||
        ex18 == ex8 ||
        ex18 == ex9 ||
        ex18 == ex10 ||
        ex18 == ex11 ||
        ex18 == ex12 ||
        ex18 == ex13 ||
        ex18 == ex14 ||
        ex18 == ex15 ||
        ex18 == ex16 ||
        ex18 == ex17
    ) {
        exa18();
    } else {
        document.getElementById("box3_5").innerHTML = ex18;
    }
}

function exa19() {
    ex19 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex19 === ex ||
        ex19 == ex1 ||
        ex19 == ex2 ||
        ex19 == ex3 ||
        ex19 == ex4 ||
        ex19 == ex5 ||
        ex19 == ex6 ||
        ex19 == ex7 ||
        ex19 == ex8 ||
        ex19 == ex9 ||
        ex19 == ex10 ||
        ex19 == ex11 ||
        ex19 == ex12 ||
        ex19 == ex13 ||
        ex19 == ex14 ||
        ex19 == ex15 ||
        ex19 == ex16 ||
        ex19 == ex17 ||
        ex19 == ex18
    ) {
        exa19();
    } else {
        document.getElementById("box4_5").innerHTML = ex19;
    }
}

function exa20() {
    ex20 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex20 === ex ||
        ex20 == ex1 ||
        ex20 == ex2 ||
        ex20 == ex3 ||
        ex20 == ex4 ||
        ex20 == ex5 ||
        ex20 == ex6 ||
        ex20 == ex7 ||
        ex20 == ex8 ||
        ex20 == ex9 ||
        ex20 == ex10 ||
        ex20 == ex11 ||
        ex20 == ex12 ||
        ex20 == ex13 ||
        ex20 == ex14 ||
        ex20 == ex15 ||
        ex20 == ex16 ||
        ex20 == ex17 ||
        ex20 == ex18 ||
        ex20 == ex19
    ) {
        exa20();
    } else {
        document.getElementById("box5_2").innerHTML = ex20;
    }
}

function exa21() {
    ex21 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex21 === ex ||
        ex21 == ex1 ||
        ex21 == ex2 ||
        ex21 == ex3 ||
        ex21 == ex4 ||
        ex21 == ex5 ||
        ex21 == ex6 ||
        ex21 == ex7 ||
        ex21 == ex8 ||
        ex21 == ex9 ||
        ex21 == ex10 ||
        ex21 == ex11 ||
        ex21 == ex12 ||
        ex21 == ex13 ||
        ex21 == ex14 ||
        ex21 == ex15 ||
        ex21 == ex16 ||
        ex21 == ex17 ||
        ex21 == ex18 ||
        ex21 == ex19 ||
        ex21 == ex19 ||
        ex21 == ex20
    ) {
        exa21();
    } else {
        document.getElementById("box5_3").innerHTML = ex21;
    }
}

function exa22() {
    ex22 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex22 === ex ||
        ex22 == ex1 ||
        ex22 == ex2 ||
        ex22 == ex3 ||
        ex22 == ex4 ||
        ex22 == ex5 ||
        ex22 == ex6 ||
        ex22 == ex7 ||
        ex22 == ex8 ||
        ex22 == ex9 ||
        ex22 == ex10 ||
        ex22 == ex11 ||
        ex22 == ex12 ||
        ex22 == ex13 ||
        ex22 == ex14 ||
        ex22 == ex15 ||
        ex22 == ex16 ||
        ex22 == ex17 ||
        ex22 == ex18 ||
        ex22 == ex19 ||
        ex22 == ex20 ||
        ex22 == ex21
    ) {
        exa22();
    } else {
        document.getElementById("box5_4").innerHTML = ex22;
    }
}

function exa23() {
    ex23 = cases[Math.floor(Math.random() * cases.length)];
    if (
        ex23 === ex ||
        ex23 == ex1 ||
        ex23 == ex2 ||
        ex23 == ex3 ||
        ex23 == ex4 ||
        ex23 == ex5 ||
        ex23 == ex6 ||
        ex23 == ex7 ||
        ex23 == ex8 ||
        ex23 == ex9 ||
        ex23 == ex10 ||
        ex23 == ex11 ||
        ex23 == ex12 ||
        ex23 == ex13 ||
        ex23 == ex14 ||
        ex23 == ex15 ||
        ex23 == ex16 ||
        ex23 == ex17 ||
        ex23 == ex18 ||
        ex23 == ex19 ||
        ex23 == ex20 ||
        ex23 == ex21 ||
        ex23 == ex22
    ) {
        exa23();
    } else {
        document.getElementById("box5_5").innerHTML = ex23;
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

document.getElementById("box1_5").addEventListener("click", () => {
    document.getElementById("box1_5").classList.toggle("red");

    red();
});

document.getElementById("box2_5").addEventListener("click", () => {
    document.getElementById("box2_5").classList.toggle("red");

    red();
});

document.getElementById("box3_5").addEventListener("click", () => {
    document.getElementById("box3_5").classList.toggle("red");

    red();
});

document.getElementById("box4_5").addEventListener("click", () => {
    document.getElementById("box4_5").classList.toggle("red");

    red();
});

document.getElementById("box5_1").addEventListener("click", () => {
    document.getElementById("box5_1").classList.toggle("red");

    red();
});

document.getElementById("box5_2").addEventListener("click", () => {
    document.getElementById("box5_2").classList.toggle("red");

    red();
});

document.getElementById("box5_3").addEventListener("click", () => {
    document.getElementById("box5_3").classList.toggle("red");

    red();
});

document.getElementById("box5_4").addEventListener("click", () => {
    document.getElementById("box5_4").classList.toggle("red");

    red();
});

document.getElementById("box5_5").addEventListener("click", () => {
    document.getElementById("box5_5").classList.toggle("red");

    red();
});

// Bingo Function
function red() {
    if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box1_2").classList.contains("red") &&
        document.getElementById("box1_3").classList.contains("red") &&
        document.getElementById("box1_4").classList.contains("red") &&
        document.getElementById("box1_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box2_1").classList.contains("red") &&
        document.getElementById("box3_1").classList.contains("red") &&
        document.getElementById("box4_1").classList.contains("red") &&
        document.getElementById("box5_1").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_1").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red") &&
        document.getElementById("box5_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_2").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box3_2").classList.contains("red") &&
        document.getElementById("box4_2").classList.contains("red") &&
        document.getElementById("box5_2").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_3").classList.contains("red") &&
        document.getElementById("box2_3").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box4_3").classList.contains("red") &&
        document.getElementById("box5_3").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_4").classList.contains("red") &&
        document.getElementById("box2_4").classList.contains("red") &&
        document.getElementById("box3_4").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red") &&
        document.getElementById("box5_4").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box1_5").classList.contains("red") &&
        document.getElementById("box2_4").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box4_2").classList.contains("red") &&
        document.getElementById("box5_1").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box2_1").classList.contains("red") &&
        document.getElementById("box2_2").classList.contains("red") &&
        document.getElementById("box2_3").classList.contains("red") &&
        document.getElementById("box2_4").classList.contains("red") &&
        document.getElementById("box2_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box3_1").classList.contains("red") &&
        document.getElementById("box3_2").classList.contains("red") &&
        document.getElementById("box3_3").classList.contains("red") &&
        document.getElementById("box3_4").classList.contains("red") &&
        document.getElementById("box3_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box4_1").classList.contains("red") &&
        document.getElementById("box4_2").classList.contains("red") &&
        document.getElementById("box4_3").classList.contains("red") &&
        document.getElementById("box4_4").classList.contains("red") &&
        document.getElementById("box4_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else if (
        document.getElementById("box5_1").classList.contains("red") &&
        document.getElementById("box5_2").classList.contains("red") &&
        document.getElementById("box5_3").classList.contains("red") &&
        document.getElementById("box5_4").classList.contains("red") &&
        document.getElementById("box5_5").classList.contains("red")
    ) {
        document.getElementById("bingo").innerHTML = "BINGO";
    } else {
        document.getElementById("bingo").innerHTML = "";
    }
}
