// Fetching countries
fetch("country.json")

    .then(function (response) {
        return response.json();
    })

    .then(function (country) {
        let newData = document.getElementById("data");
        let filled = "";
        for (let data of country) {
            filled += `
            <tr>
                <td id="make">${data['sno']}</td>
                <td id="model">${data['name']}</td>
                <td id="variant">${data['capital']}</td>
                <td id="variant">${data['currency']}</td>
            </tr>
        `;
        }


        newData.innerHTML = filled;
    })