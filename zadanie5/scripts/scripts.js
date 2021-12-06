function exercise1_1() {
    addDivFive();
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

function changeDivInnerText() {
    var divs = document.body.getElementsByTagName("div");

    for (var i = 0; i < divs.length; i++) {
        divs[i].textContent = "nowy tekst";
    }
}

class Auto {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }
}

function createCars() {
    var cars = [];
    cars.push(new Auto(1998, 20_000, 60_000, 70_000));
    cars.push(new Auto(2000, 15_000, 50_000, 60_000));
    cars.push(new Auto(1998, 24_000, 8_000, 10_000));
    cars.push(new Auto(1998, 27_000, 60_000, 70_000));
    cars.push(new Auto(1998, 54_000, 6_000, 8_000));
    cars.push(new Auto(1998, 4_000, 160_000, 170_000));

    return cars;
}

function createCarRecord(car) {
    var row = document.createElement("tr");
    
    var rokColumn = document.createElement("td");
    rokColumn.innerText = car.rok;
    row.appendChild(rokColumn);

    var przebiegColumn = document.createElement("td");
    przebiegColumn.innerText = car.przebieg;
    row.appendChild(przebiegColumn);

    var cenaWyjsciowaColumn = document.createElement("td");
    cenaWyjsciowaColumn.innerText = car.cena_wyjsciowa;
    row.appendChild(cenaWyjsciowaColumn);

    var cenaKoncowaColumn = document.createElement("td");
    cenaKoncowaColumn.innerText = car.cena_koncowa;
    row.appendChild(cenaKoncowaColumn);

    return row;
}

function createCarsTable(cars) {
    var table = document.createElement("table");
    
    var header = document.createElement("thead");
    table.appendChild(header);
    var headerTr = document.createElement("tr");
    header.appendChild(headerTr);
    var rok = document.createElement("th");
    var przebieg = document.createElement("th")
    var cena_wyjsciowa = document.createElement("th");
    var cena_koncowa = document.createElement("th");
    
    rok.innerText = "Rok";
    przebieg.innerText = "Przebieg";
    cena_wyjsciowa.innerText = "Cena wyjściowa";
    cena_koncowa.innerText = "Cena końcowa";
    
    headerTr.appendChild(rok);
    headerTr.appendChild(przebieg);
    headerTr.appendChild(cena_wyjsciowa);
    headerTr.appendChild(cena_koncowa);
    
    var data = document.createElement("tbody");
    table.appendChild(data);

    for (var i = 0; i < cars.length; i++) {
        data.appendChild(createCarRecord(cars[i]));
    }

    document.body.appendChild(table);
}