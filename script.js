const bulbRow = document.getElementById('bulbRow');
const decimalOutput = document.getElementById('decimalOutput');
const bulbCount = 8;

// Create bulbs and their labels
for (let i = 0; i < bulbCount; i++) {
    const bulbContainer = document.createElement('div');
    bulbContainer.classList.add('bulb-container');
    bulbContainer.style.display = 'flex';
    bulbContainer.style.flexDirection = 'column';
    bulbContainer.style.alignItems = 'center';

    const bulb = document.createElement('img');
    bulb.src = 'bulb.svg';
    bulb.alt = `Bulb ${i}`;
    bulb.classList.add('bulb');
    bulb.dataset.position = bulbCount - 1 - i;

    bulb.addEventListener('click', function () {
        bulb.classList.toggle('on');
        updateDecimalOutput();
    });

    const binaryLabel = document.createElement('span');
    binaryLabel.textContent = Math.pow(2, bulb.dataset.position);
    binaryLabel.classList.add('binary-label');
    binaryLabel.style.color = 'white';
    binaryLabel.style.marginTop = '10px';
    binaryLabel.style.fontSize = '1.2rem';

    bulbContainer.appendChild(bulb);
    bulbContainer.appendChild(binaryLabel);

    bulbRow.appendChild(bulbContainer);
}

// Update the decimal and binary output
function updateDecimalOutput() {
    let binaryString = '';
    document.querySelectorAll('.bulb').forEach(bulb => {
        binaryString += bulb.classList.contains('on') ? '1' : '0';
    });

    const decimalValue = parseInt(binaryString, 2);
    decimalOutput.innerHTML = `Decimal: ${decimalValue} <br> Binary: ${binaryString}`;
}

updateDecimalOutput();
