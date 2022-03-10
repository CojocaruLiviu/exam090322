let cars = [
    {
        "Name": "Toyota",
        "engineType": "Diesel",
        "maxSpeed": 250,
        "price": 7500
    },
    {
        "Name": "Mercedes",
        "engineType": "Benzine",
        "maxSpeed": 350,
        "price": 9500
    },
    {
        "Name": "Tesla",
        "engineType": "Energy",
        "maxSpeed": 300,
        "price": 10500
    }
    , {
        "Name": "Opel",
        "engineType": "Diesel",
        "maxSpeed": 290,
        "price": 5500
    }
    , {
        "Name": "BMW",
        "engineType": "Benzine",
        "maxSpeed": 330,
        "price": 8500
    }
]




const adauga = () => {
    let name = document.getElementById("name").value;
    let engine = document.getElementById("engine").value;
    let speed = document.getElementById("sped").value;
    let price = document.getElementById("price").value;

    let car = {
        "Name": name,
        "engineType": engine,
        "maxSpeed": speed,
        "price": price
    }

    cars.push(car);

    document.getElementById("cars").innerHTML += "</br>";
    for (const key in car) {
        document.getElementById("cars").innerHTML += (`${key}: ${car[key]}</br>`);
    }

    //alert(JSON.stringify(cars));
}


// Afisarea tuturor obiectelor

for (const entry of cars) {
    document.getElementById("cars").innerHTML += "</br>";
    for (const key in entry) {
        document.getElementById("cars").innerHTML += (`${key}: ${entry[key]}</br>`);
    }
}
//////

