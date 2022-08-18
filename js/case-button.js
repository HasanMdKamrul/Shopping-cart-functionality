
// ** Case button  clicked 

document.getElementById('btn-case-plus').addEventListener('click', function(){

    const productPrice = 59;
    const totalCaseNumber = updateNumber(true,'case-number-input');
    updatePrice(totalCaseNumber,productPrice,'case-total-price');

    subSection();

})

document.getElementById('button-case-minus').addEventListener('click', function(){

    const productPrice = 59;
    const totalCaseNumber = updateNumber(false,'case-number-input');
    updatePrice(totalCaseNumber,productPrice,'case-total-price');

    subSection();

})