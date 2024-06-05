document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.val');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const display = document.querySelector('input[name=display]');
            const value = this.textContent.trim();

            if (value === '=') {
                // Perform calculation when '=' is clicked
                display.value = eval(display.value);
            } else if (value === 'AC') {
                // Clear the display when 'AC' is clicked
                display.value = '';
            } else if (value === 'C') {
                // Remove the last character from the display when 'C' is clicked
                display.value = display.value.slice(0, -1);
            } else if (value === '%') {
                // Calculate percentage
                display.value = eval(display.value) / 100;
            } else {
                // Append the clicked button value to the display
                display.value += value;
            }
        });
    });
});