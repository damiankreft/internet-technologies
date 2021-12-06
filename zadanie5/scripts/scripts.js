function exercise1_1() {
    addDivFive();
}

function exercise1_2() {
    removeFirstDivOccurence();
}

function exercise1_3() {
    changeDivBackground();
}

function addDivFive() {
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