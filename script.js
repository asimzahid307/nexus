// Cars data collection
// Construct object function for Cars
function Car(make, model, variant, year, color, hp) {
    this.make = make,
        this.model = model,
        this.variant = variant,
        this.year = year,
        this.color = color,
        this.hp = hp
}

// Creating cars
const car1 = new Car("Honda", "Civic", "Oriel", 2007, "Silver", 150);





// Displaying car data with DOM
document.getElementById("make").innerHTML = car1['make'];
document.getElementById("model").innerHTML = car1['model'];
document.getElementById("variant").innerHTML = car1['variant'];
document.getElementById("year").innerHTML = car1['year'];
document.getElementById("color").innerHTML = car1['color'];
document.getElementById("hp").innerHTML = car1['hp'];