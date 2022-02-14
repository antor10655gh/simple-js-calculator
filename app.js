document.getElementById('all-buttons').addEventListener('click', function(event){
    const value = event.target.value;
    const displayInput = document.getElementById('display-result');
    const displayResult = displayInput.value;
    displayInput.value = displayResult + value;

    if(value == 'C'){
        displayInput.value = '';
    }
})
