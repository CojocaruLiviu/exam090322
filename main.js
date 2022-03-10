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
    
    let save = JSON.stringify(cars);
    localStorage.setItem('Evaluare', save);
}


// Afisarea tuturor obiectelor

for (const entry of cars) {
    document.getElementById("cars").innerHTML += "</br>";
    for (const key in entry) {
        document.getElementById("cars").innerHTML += (`${key}: ${entry[key]}</br>`);
    }
}
//////


const delet = () => {
    document.getElementById("cars").innerHTML = " ";
    let sterge = document.getElementById("delt").value;



    for (let entry of cars) {
        document.getElementById("cars").innerHTML += "</br>";

        for (let key in entry) {
            if (entry[key] == sterge) {
                cars.splice(0, 1);
            } else if (entry[key] != sterge) {
                document.getElementById("cars").innerHTML += (`${key}: ${entry[key]} </br>`);
            }
        }
    }
    // console.log(JSON.stringify(cars));
}

const calcPrice = () => {
    let sum = 0;
    for (let entry of cars) {
        for (let key in entry) {
            if (key == "price") {
                sum += entry[key];
            }
        }
    }
    document.getElementById("tprice").innerHTML = sum;
}

const addteen = () => {
    document.getElementById("cars").innerHTML = " ";
    for (let entry of cars) {
        document.getElementById("cars").innerHTML += "</br>";
        for (let key in entry) {
            if (key == "price") {
                entry[key] += 10;
            }
            document.getElementById("cars").innerHTML += (`${key}: ${entry[key]} </br>`);
        }
    }
}
