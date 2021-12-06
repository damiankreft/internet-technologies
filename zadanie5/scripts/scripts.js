function exercise1_1() {
    addDivFive();
}

function addDivFive() {
    let div5 = document.createElement("div");
    div5 = document.createTextNode("div 5");
    document.body.appendChild(div5);
}