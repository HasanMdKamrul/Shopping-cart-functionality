// ** getInputValue

const getInputValue = (id)=> parseInt(document.getElementById(id).value);

// ** setInputValue

const setInputValue = (id,newValue)=> document.getElementById(id).value = newValue;
// ** getTextValue

const getTextValue = (id)=> parseInt(document.getElementById(id).innerText);

// ** setTextValue

const setTextValue = (id,newValue)=> document.getElementById(id).innerText = newValue;

const updateNumber = (isIncrease,id)=>{
    // ** now for a button click we'll change the input field value

    const plusInputValue = getInputValue(id);
    // const incrementValue = casePlusInputValue + 1;
    // const incrementValue = incrementValeByOne(casePlusInputValue)

    let updateValue;

    if (isIncrease) {
         updateValue = plusInputValue + 1;
    } else {
         updateValue = plusInputValue - 1;
    }
    // ** set the case input value after the button clicked
    setInputValue(id,updateValue);

    return updateValue;
}

const updatePrice = (totalInputValue,productPrice,id)=>{
    const totalPrice = totalInputValue * productPrice;
    setTextValue(id,totalPrice);
};

const subSection = ()=>{
    const phoneTotal = getTextValue('phone-price-total');
    const caseTotal = getTextValue('case-total-price');

    const subTotal = phoneTotal + caseTotal;

    setTextValue('sub-total',subTotal);

    const taxTotalString = (subTotal * 10/100).toFixed(2);

    const taxTotal = parseFloat(taxTotalString);

    setTextValue('tax',taxTotal);

    const finalTotal = taxTotal + subTotal;

    setTextValue('total',finalTotal);
};