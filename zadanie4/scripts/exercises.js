/* Wrappers */
function exercise_1() {
    isPythagoreanTriple(3, 4, 5);
    isPythagoreanTriple(2, 3, 4);
}

function exercise() {
    
}

function exercise() {
    
}

function exercise() {
    
}

function exercise() {
    
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