// ** Phone button  clicked 

document.getElementById('phone-button-plus').addEventListener('click', function(){

    const productPrice = 1219;
    const totalPhoneNumber = updateNumber(true,'phone-number');
    updatePrice(totalPhoneNumber,productPrice,'phone-price-total');

    subSection();

})

document.getElementById('phone-button-minus').addEventListener('click', function(){

    const productPrice = 1219;
    const totalPhoneNumber = updateNumber(false,'phone-number');
    updatePrice(totalPhoneNumber,productPrice,'phone-price-total');

    subSection();

})