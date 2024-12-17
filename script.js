// Cars data collection
// Construct object function for Cars
// function Car(make, model, variant, year, color, hp) {
//     this.make = make,
//         this.model = model,
//         this.variant = variant,
//         this.year = year,
//         this.color = color,
//         this.hp = hp
// }

// // Creating cars
// const car1 = new Car("Honda", "Civic", "Oriel", 2007, "Silver", 150);





// // Displaying car data with DOM
// document.getElementById("make").innerHTML = car1['make'];
// document.getElementById("model").innerHTML = car1['model'];
// document.getElementById("variant").innerHTML = car1['variant'];
// document.getElementById("year").innerHTML = car1['year'];
// document.getElementById("color").innerHTML = car1['color'];
// document.getElementById("hp").innerHTML = car1['hp'];

// Using json format
const Cars = [
    {
        "sno": 1,
        "make": "Honda",
        "model": "Civic",
        "variant": "Oriel",
        "year": 2007,
        "color": "Silver",
        "hp": 150
    },
    {
        "sno": 2,
        "make": "Toyota",
        "model": "Corolla",
        "variant": "Gli",
        "year": 2012,
        "color": "White",
        "hp": 120
    },
    {
        "sno": 3,
        "make": "Suzuki",
        "model": "Mehran",
        "variant": "VXR",
        "year": 2016,
        "color": "Silver",
        "hp": 45
    }
];

// New trick
let newData = document.getElementById("data");
let filled = "";
for(let car of Cars){
    filled += `
            <tr>
            <td id="sno">${car['sno']}</td>
            <td id="make">${car['make']}</td>
            <td id="model">${car['model']}</td>
            <td id="variant">${car['variant']}</td>
            <td id="year">${car['year']}</td>
            <td id="color">${car['color']}</td>
            <td id="hp">${car['hp']}</td>
          </tr>
    `;

}

newData.innerHTML = filled;

// Getting data using loop

// Cars.forEach(car => {
//     document.getElementById("data").innerHTML = `
        // <tr>
        //     <td id="sno">${car['sno']}</td>
        //     <td id="make">${car['make']}</td>
        //     <td id="model">${car['model']}</td>
        //     <td id="variant">${car['variant']}</td>
        //     <td id="year">${car['year']}</td>
        //     <td id="color">${car['color']}</td>
        //     <td id="hp">${car['hp']}</td>
        //   </tr>
//     `;
// });
 
// Mapping
// Cars.map(car => {
//     document.getElementById("data").innerHTML = `
//     <tr>
//         <td id="sno">${car['sno']}</td>
//         <td id="make">${car['make']}</td>
//         <td id="model">${car['model']}</td>
//         <td id="variant">${car['variant']}</td>
//         <td id="year">${car['year']}</td>
//         <td id="color">${car['color']}</td>
//         <td id="hp">${car['hp']}</td>
//       </tr>
// `;
// })

// using for loop
// for(let car of Cars){
//     document.getElementById("data").innerHTML = `
//     <tr>
//         <td id="sno">${car['sno']}</td>
//         <td id="make">${car['make']}</td>
//         <td id="model">${car['model']}</td>
//         <td id="variant">${car['variant']}</td>
//         <td id="year">${car['year']}</td>
//         <td id="color">${car['color']}</td>
//         <td id="hp">${car['hp']}</td>
//       </tr>
// `;
// }