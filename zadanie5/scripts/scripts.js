function exercise1_1() {
    addNextDiv();
}

function exercise1_2() {
    removeFirstDivOccurence();
}

function exercise1_3() {
    changeDivBackground();
}

function exercise1_4() {
    changeDivInnerText();
}

function exercise2() {
    var cars = createCars();
    createCarsTable(cars)
}

function addNextDiv() {
    let div5 = document.createElement("div");
    div5.textContent += "div 5";
    document.body.appendChild(div5);
}

function removeFirstDivOccurence() {
    var div = document.body.getElementsByTagName("div")[0];
    document.body.removeChild(div);
}

function changeDivBackground() {
    document.body.getElementsByTagName("div")[2].style.backgroundColor = "red";
}

function changeDivInnerText() {
    var divs = document.body.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        divs[i].textContent += " nowy tekst";
    }
}