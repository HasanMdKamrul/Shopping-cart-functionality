// ** getInputValue

const getInputValue = (id)=> parseInt(document.getElementById(id).value);

// ** setInputValue

const setInputValue = (id,newValue)=> document.getElementById(id).value = newValue;

// ** setTextValue

const setTextValue = (id,newValue)=> document.getElementById(id).innerText = newValue;

const updateCaseNumber = (isIncrease)=>{
    // ** now for a button click we'll change the input field value

    const casePlusInputValue = getInputValue('case-number-input');
    // const incrementValue = casePlusInputValue + 1;
    // const incrementValue = incrementValeByOne(casePlusInputValue)

    let incrementValue;

    if (isIncrease) {
         incrementValue = casePlusInputValue + 1;
    } else {
         incrementValue = casePlusInputValue - 1;
    }
    // ** set the case input value after the button clicked
    setInputValue('case-number-input',incrementValue);

    return incrementValue;
}

const totalPrice = (isIncrease)=>{

    if (isIncrease) {
        const totalCaseNumber = updateCaseNumber(true);
        const totalPrice = totalCaseNumber * 59;
        setTextValue('case-total-price',totalPrice);
    } else {
        const totalCaseNumber = updateCaseNumber();
        const totalPrice = totalCaseNumber * 59;
        setTextValue('case-total-price',totalPrice);
    }

}

