document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.querySelector("tbody");

    for (let hour = 0; hour < 24; hour++) {
        let row = document.createElement("tr");

                            let mondayCell = document.createElement("td");
                            mondayCell.className = "time-slot"; 

                            let timeLabel = document.createElement("div");
                            timeLabel.className = "time-label";
                            
                            timeLabel.textContent = formatTime24Hour(hour);
                            mondayCell.appendChild(timeLabel);

                            let halfHour1 = document.createElement("div");
                            let halfHour2 = document.createElement("div");
                            halfHour1.className = "half-hour";
                            halfHour2.className = "half-hour";
                            mondayCell.appendChild(halfHour1);
                            mondayCell.appendChild(halfHour2);
                    
                            row.appendChild(mondayCell);
        

        for (let day = 1; day < 7; day++) {  
            let slot = document.createElement("td");
            slot.className = "time-slot";  
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

function formatTime24Hour(hour) {
    return `${String(hour).padStart(2, "0")}:00`; // 
}