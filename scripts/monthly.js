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
          "2025-01-01": "New Year's Day",
          "2025-12-25": "Christmas Day",
          "2025-11-27": "Thanksgiving"
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
          firstDay = firstDay === 0 ? 6 : firstDay - 1; // Adjust Sunday start
          let daysInMonth = new Date(year, month + 1, 0).getDate();
          let prevDays = new Date(year, month, 0).getDate();
          
          let day = 1;
          let nextDay = 1;
          let row = document.createElement("tr");
          
          for (let i = 0; i < 7; i++) {
              let cell = document.createElement("td");
              if (i < firstDay) {
                  cell.textContent = prevDays - firstDay + i + 1;
                  cell.classList.add("prev-month");
              } else {
                  cell.textContent = day;
                  cell.classList.add("current-month");
                  checkHoliday(cell, year, month, day);
                  day++;
              }
              row.appendChild(cell);
          }
          calendarBody.appendChild(row);
          
          while (day <= daysInMonth) {
              let row = document.createElement("tr");
              for (let i = 0; i < 7; i++) {
                  let cell = document.createElement("td");
                  if (day > daysInMonth) {
                      cell.textContent = nextDay++;
                      cell.classList.add("next-month");
                  } else {
                      cell.textContent = day;
                      cell.classList.add("current-month");
                      checkHoliday(cell, year, month, day);
                      day++;
                  }
                  row.appendChild(cell);
              }
              calendarBody.appendChild(row);
          }
      }
      
      function checkHoliday(cell, year, month, day) {
          let dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
          if (holidays[dateStr]) {
              cell.classList.add("holiday");
              cell.innerHTML = `<span class="holiday-marker">${day}</span>`;
              cell.title = holidays[dateStr];
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
  
 