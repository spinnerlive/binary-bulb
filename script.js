const bulbRow = document.getElementById('bulbRow');
const decimalOutput = document.getElementById('decimalOutput');
const bulbCount = 8; 

for (let i = 0; i < bulbCount; i++) {
    const bulb = document.createElement('img');
    bulb.src = 'bulb.svg'; 
    bulb.alt = `Bulb ${i}`;
    bulb.classList.add('bulb');
    bulb.dataset.position = bulbCount - 1 - i; 

    bulb.addEventListener('click', function () {
        bulb.classList.toggle('on');
        updateDecimalOutput();
    });

    bulbRow.appendChild(bulb);
}

function updateDecimalOutput() {
    let binaryString = '';
    document.querySelectorAll('.bulb').forEach(bulb => {
        binaryString += bulb.classList.contains('on') ? '1' : '0';
    });
    const decimalValue = parseInt(binaryString, 2);
    decimalOutput.textContent = `Decimal: ${decimalValue}`;
}

updateDecimalOutput();
