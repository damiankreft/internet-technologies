/* Wrappers */
function exercise_1() {
    isPythagoreanTriple(3, 4, 5);
    isPythagoreanTriple(2, 3, 4);
}

function exercise_2() {
    rangeThreeDivisibility(10, 100, 2);
    rangeThreeDivisibility(1, 12, 3);
}

function exercise_3() {
    multiplicationTable(4);
    multiplicationTable(10);
}

function exercise_4() {
    fibonacci(10);
}

function exercise_5() {
    christmasTree(5);
}

function exercise_6() {
    christmasTree2(5);
}

function exercise_7() {
    area(2, 3, 4, "trapezoid");
    area(2, 3, 4, "triangle");
}

function exercise_8() {
    wynik(trapezoid, 2, 3, 4);
    wynik(triangle, 2, 3, 4);
}

function exercise_9() {
    alert("Nic tutaj nie ma. ;)")
}

function exercise_10() {
    alert("Zadanie 10 należy sprawdzić za pomocą konsoli.");
}

class Auto {
    static auta = [];

    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    zwiekszCeneWyjsciowa() {
        this.cena_wyjsciowa += 1_000;
    }

    obnizCeneKoncowaRok() {
        this.cena_koncowa -= Math.floor(new Date().getFullYear() - this.rok) * 1_000;

        if (this.cena_koncowa < 0 ) {
            this.cena_koncowa = 0;
        }
    }

    obnizCeneKoncowaPrzebieg() {
        this.cena_koncowa -= Math.floor(this.przebieg / 100_000) * 10_000;

        if (this.cena_koncowa < 0 ) {
            this.cena_koncowa = 0;
        }
    }

    ustawPrzebiegAndRokAndCenaKoncowa(rok, przebieg) {
        this.rok = rok;
        this.przebieg = przebieg;

        this.obnizCeneKoncowaRok();
        this.obnizCeneKoncowaPrzebieg();
    }

    dopiszDoTablicy() {
        if (this.cena_koncowa > 10_000) {
            Auto.auta.push(this);
        }
    }

    static zwiekszRokByOne() {
        Auto.auta.forEach((c) => { 
            c.rok += 1;
         })
    }
}

/* actual code */
function isPythagoreanTriple(a, b, c) {
    console.log("");
    console.log("Exercise 1 start");
    
    var numbers = [a, b, c];
    numbers.sort((a, b) => a - b);
    console.log("Validating " + numbers);

    if (Math.pow(numbers[0], 2) + Math.pow(numbers[1], 2) === Math.pow(numbers[2], 2)) {
        console.log("Given set is Pythagorean Triple.");
    }    
    else {
        console.log("Given set is not Pythagorean Triple")
    }

    console.log("Exercise 1 #####")
}

function rangeThreeDivisibility(a, b, c) {
    console.log("");
    console.log("Exercise 2 start");

    for (let num = a; num <= b; num++) {
        if (num % c === 0) {
            console.log(num);
        }
    }

    console.log("Exercise 2 #####")
}

function multiplicationTable(height) {
    var result = "";

    for (let column = 1; column <= height; column++) {
        for (let row = 1; row <= height; row++) {
            var val = column * row;
            if (val >= 10) {
                result += val + " ";
            }
            else {
                result += val + "  "
            }
        }
        result += '\n'
    }

    console.log(result);
}

function fibonacci(length) {
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= length; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
}

function christmasTree(height) {
    var tree = "";

    for (let index = height; index > 1; index--) {
        for (let j = 0; j <= height-index; j++) {
            tree += "*";
        }

        tree += "\n";
    }

    console.log(tree);
}

function christmasTree2(height) {
    var tree = "";

    for (var row = 0; row < height; row++) {
        for (var inline = 0; inline < height; inline++) {
            if (inline < height - row) {
                tree += "*";
            }
            else {
                tree += " ";
            }
        }
        
        for (var inline = height; inline > 0; inline--) {
            if (inline > height - row) {
                tree += " ";
            }
            else {
                tree += "*";
            }
        }

        tree += "\n";
    }
    
    for (var end = 0; end < height * 2; end++) {
        tree += "*"
    }

    console.log(tree);
}

function drawLeftPart(height) {
    for (var row = 0; row < height; row++) {
        for (var inline = 0; inline < height; inline++) {
            if (inline < height - row) {
                tree += "*";
            }
            else {
                tree += " ";
            }
        }
    }
}

function area(a, b, c, type) {
    switch (type) {
        case "rectangle":
            console.log(rectangle(a, b));
            break;
        case "trapezoid":
            console.log(trapezoid(a, b, c));
            break;
        case "parallelogram":
            console.log(parallelogram(a, b));
            break;
        case "triangle":
            console.log(triangle(a, b));
            break;
    }
}

function rectangle() {
    return console.log(a*b);
}

function trapezoid() {
    return console.log(((a+b)*h)/2);
}

function parallelogram() {
    return console.log(a*h);
}

function triangle(a, h) {
    return console.log((a*h)/2);
}


function trapez(a, b, c) {
    return ((a+b)*c)/2;
}
var wynik = (fukcja, a, b, c) => { 
    return fukcja(a, b, c); 
}