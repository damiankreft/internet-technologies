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

function area(a, b, c, typ) {
    switch (typ) {
        case "rectangle":
            console.log(rectangle(a, b));
            break;
        case "trapeze":
            console.log(trapeze(a, b));
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

}

function trapeze() {

}

function parallelogram() {

}

function triangle() {
    
}