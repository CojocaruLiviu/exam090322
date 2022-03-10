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


for (const entry of cars) {
    document.getElementById("cars").innerHTML += "</br>";
    for (const key in entry) {
        document.getElementById("cars").innerHTML += (`${key}: ${entry[key]}</br>`);
    }
}

