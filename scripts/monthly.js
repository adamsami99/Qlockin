 // Växla 'active' klassen vid klick på view-toggle knapparna
    document.addEventListener("DOMContentLoaded", function() {
      const viewToggleButtons = document.querySelectorAll('.view-toggle');

      viewToggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
          // Ta bort 'active' från båda knapparna
          viewToggleButtons.forEach(btn => btn.classList.remove('active'));
          // Lägg till 'active' på den klickade knappen
          this.classList.add('active');
        });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ];
      
      const holidays = {
<<<<<<< HEAD
        "12-31": "Nyårsafton",
        "01-01": "Nyårsdagen",
        "01-05": "Trettondagsafton",
        "01-06": "Trettondedag jul",
        "04-18": "Långfredagen",
        "04-20": "Påskdagen",
        "04-21": "Annandag påsk",
        "05-01": "Första maj",
        "05-29": "Kristi himmelsfärdsdag",
        "06-06": "Sveriges nationaldag",
        "06-21": "Midsommardagen",
        "11-01": "Alla helgons dag",
        "12-24": "Julafton",
        "12-25": "Juldagen",
        "12-26": "Annandag jul",
=======
          "2025-01-01": "New Year's Day",
          "2025-12-25": "Christmas Day",
          "2025-11-27": "Thanksgiving"
>>>>>>> 0e67f3abb1d7389a093383cf1299b43a943e43e4
      };
      
      const calendarBody = document.querySelector(".calendar tbody");
      const dateDisplay = document.querySelector(".date-display");
      const todayButton = document.querySelector(".today-btn");
      const prevMonthBtn = document.querySelector(".prev-month-btn");
      const nextMonthBtn = document.querySelector(".next-month-btn");
      
      let currentMonth = new Date().getMonth();
      let currentYear = new Date().getFullYear();
      
      function generateCalendar(month, year) {
        calendarBody.innerHTML = "";
        dateDisplay.textContent = `${monthNames[month]} ${year}`;
    
        let firstDay = new Date(year, month, 1).getDay();
        firstDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust so that the week starts on Monday
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let prevDays = new Date(year, month, 0).getDate();
    
        let day = 1;
        let nextDay = 1;
        let row = document.createElement("tr");
    
        for (let i = 0; i < 7; i++) {
            let cell = document.createElement("td");
            let isSunday = i === 6; // Check if it's Sunday
    
            if (i < firstDay) {
                cell.textContent = prevDays - firstDay + i + 1;
                cell.classList.add("prev-month");
            } else {
                cell.textContent = day;
                cell.classList.add("current-month");
                checkHoliday(cell, month, day, isSunday); // Call with MM-DD
                day++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    
        while (day <= daysInMonth) {
            let row = document.createElement("tr");
            for (let i = 0; i < 7; i++) {
                let cell = document.createElement("td");
                let isSunday = i === 6; // Check if it's Sunday
    
                if (day > daysInMonth) {
                    cell.textContent = nextDay++;
                    cell.classList.add("next-month");
                } else {
                    cell.textContent = day;
                    cell.classList.add("current-month");
                    checkHoliday(cell, month, day, isSunday); // Call with MM-DD
                    day++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }
    
      function checkHoliday(cell, month, day, isSunday) {
        let dateStr = `${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        let holidayText = holidays[dateStr]; // Lookup without year
    
        if (holidayText) {
            cell.classList.add("holiday");
    
            let holidayLabel = document.createElement("div");
            holidayLabel.classList.add("holiday-label");
            holidayLabel.textContent = holidayText;
    
            let dateSpan = document.createElement("span");
            dateSpan.classList.add("day-number");
            dateSpan.textContent = day;
    
            cell.innerHTML = ""; // Clear previous content
            cell.appendChild(holidayLabel);
            cell.appendChild(dateSpan);
        }
    
        if (isSunday) {
            cell.classList.add("sunday");
        }
    }
    
      
      prevMonthBtn.addEventListener("click", function () {
          currentMonth--;
          if (currentMonth < 0) {
              currentMonth = 11;
              currentYear--;
          }
          generateCalendar(currentMonth, currentYear);
      });
      
      nextMonthBtn.addEventListener("click", function () {
          currentMonth++;
          if (currentMonth > 11) {
              currentMonth = 0;
              currentYear++;
          }
          generateCalendar(currentMonth, currentYear);
      });
      
      todayButton.addEventListener("click", function () {
          currentMonth = new Date().getMonth();
          currentYear = new Date().getFullYear();
          generateCalendar(currentMonth, currentYear);
      });
      
      generateCalendar(currentMonth, currentYear);
  });
  
 