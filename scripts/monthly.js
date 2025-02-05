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
 