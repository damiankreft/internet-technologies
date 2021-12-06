function exercise1_1() {
    addDivFive();
}

function exercise1_2() {
    removeFirstDivOccurence();
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