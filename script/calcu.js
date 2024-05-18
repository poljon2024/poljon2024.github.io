
    function calculateSum() {
        const numbersInput = document.getElementById('numbers').value;
        const numbersArray = numbersInput.split(',').map(num => parseFloat(num));
        const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
        document.getElementById('sum').value = sum;
        document.getElementById('sumResult').style.display = 'block';
    }

    function calculateDifference() {
        const sum = parseFloat(document.getElementById('sum').value);
        const differenceInput = parseFloat(document.getElementById('difference').value);
        const difference = differenceInput - sum;
        document.getElementById('differenceValue').value = difference;
        document.getElementById('differenceResult').style.display = 'block';
    }

    function clearInputs() {
        document.getElementById('numbers').value = '';
        document.getElementById('sum').value = '';
        document.getElementById('difference').value = '';
        document.getElementById('differenceValue').value = '';
        document.getElementById('sumResult').style.display = 'none';
        document.getElementById('differenceResult').style.display = 'none';
    }