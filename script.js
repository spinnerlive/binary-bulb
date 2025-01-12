const bulbRow = document.getElementById('bulbRow');
const decimalOutput = document.getElementById('decimalOutput');
const bulbCount = 8; // 8 bulbs representing an 8-bit binary number

// Create bulbs and add click event listeners
for (let i = 0; i < bulbCount; i++) {
    const bulb = document.createElement('div');
    bulb.classList.add('bulb');
    bulb.dataset.position = bulbCount - 1 - i; // Set the binary position (LSB on the right)

    bulb.addEventListener('click', function () {
        bulb.classList.toggle('on');
        updateDecimalOutput();
    });

    bulbRow.appendChild(bulb);
}

// Function to calculate decimal value from binary state
function updateDecimalOutput() {
    let binaryString = '';
    document.querySelectorAll('.bulb').forEach(bulb => {
        binaryString += bulb.classList.contains('on') ? '1' : '0';
    });
    const decimalValue = parseInt(binaryString, 2);
    decimalOutput.textContent = `Decimal: ${decimalValue}`;
}

// Initial decimal value display
updateDecimalOutput();
