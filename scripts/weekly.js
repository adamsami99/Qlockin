document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("tbody");

    for (let hour = 0; hour < 24; hour++) {
        let row = document.createElement("tr");

        // Format time (12-hour format)
        let formattedHour = (hour === 0 ? "12 AM" : 
                            hour < 12 ? hour + " AM" : 
                            hour === 12 ? "12 PM" : 
                            (hour - 12) + " PM");

        // Create time column
        let timeCell = document.createElement("td");
        timeCell.className = "time-column";
        timeCell.textContent = formattedHour;
        row.appendChild(timeCell);

        // Create time slots for each day of the week
        for (let day = 0; day < 7; day++) {
            let slot = document.createElement("td");
            slot.className = "time-slot";

            if (day === 0) {
                slot.innerHTML = `<span class="time-label">${formattedHour}</span>`;
                slot.setAttribute("rowspan", "1"); // Make time span both half-hour divs
            }


            // Add two half-hour divs
            let halfHour1 = document.createElement("div");
            let halfHour2 = document.createElement("div");
            halfHour1.className = "half-hour";
            halfHour2.className = "half-hour";

            slot.appendChild(halfHour1);
            slot.appendChild(halfHour2);
            row.appendChild(slot);
        }

        tableBody.appendChild(row);
    }
});

/* this is if its html code 

<table>
    <thead>
        <tr>
            <th class="time-column">All-day</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="time-column">12 AM</td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            ...
        </tr>
        <tr>
            <td class="time-column">1 AM</td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            <td class="time-slot"><div class="half-hour"></div><div class="half-hour"></div></td>
            ...
        </tr>
        ...
    </tbody>
</table>
*/ 