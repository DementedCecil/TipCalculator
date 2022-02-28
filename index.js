// Variables
const billAmount = document.getElementById('bill_amount');
const people = document.getElementById('people');
const tipTotal = document.getElementById('tip_amount');
const total = document.getElementById('total_amount');
const reset = document.getElementById('reset');

// Tips
const five = document.getElementById('five').addEventListener('click', tipSelect);
const ten = document.getElementById('ten').addEventListener('click', tipSelect);
const fifteen = document.getElementById('fifteen').addEventListener('click', tipSelect);
const twentyfive = document.getElementById('twenty-five').addEventListener('click', tipSelect);
const fifty = document.getElementById('fifty').addEventListener('click', tipSelect);
const custom = document.getElementById('custom').addEventListener('click', tipSelect);

// Mark only one tip as 'selected'
function tipSelect(e) {
    document.querySelectorAll('.tip-pc').forEach(tip => {
        tip.classList.remove('selected');
    });
    e.target.classList.add('selected');
    calculate();
}

// Reset page
reset.addEventListener('click', () => {
    window.location.reload(true);
})

// Errors
const errorHighlight = document.querySelectorAll('.error');
const billSpan = document.querySelector('.bill-span');
const peopleSpan = document.querySelector('.people-span');

// Calculation
function calculate(){
    const tipPercent = document.querySelector('.selected');
    const tip = billAmount.value * tipPercent.value / 100;
    const tot = tip + billAmount.value / people.value;

    if(billAmount.value == 0 & people.value == 0) {
        console.log('fill in all fields');
        billAmount.classList.add('error');
        people.classList.add('error');
        billSpan.classList.remove('hidden');
        peopleSpan.classList.remove('hidden');

    } else if(billAmount.value == 0 & people.value > 0) {
        console.log('fill in bill amount');
        document.querySelectorAll('.error').forEach(item => {
            item.classList.remove('error');
        })
        billAmount.classList.add('error');
        billSpan.classList.remove('hidden');
        peopleSpan.classList.add('hidden');

    } else if(billAmount.value > 0 & people.value == 0) {
        console.log('fill in amount of people');
        document.querySelectorAll('.error').forEach(item => {
            item.classList.remove('error');
        })
        people.classList.add('error');
        billSpan.classList.add('hidden');
        peopleSpan.classList.remove('hidden');

    } else {
        document.querySelectorAll('.error').forEach(item => {
            item.classList.remove('error');
        })
        billSpan.classList.add('hidden');
        peopleSpan.classList.add('hidden');

        tipTotal.setAttribute('value', '$' + tip.toFixed(2));
        total.setAttribute('value', '$' + tot.toFixed(2));
    }   
}