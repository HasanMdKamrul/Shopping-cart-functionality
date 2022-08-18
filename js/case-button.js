
// ** Case button plus clicked 

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // ** now for a button click we'll change the input field value

    const casePlusInputValue = getInputValue('case-number-input');

    console.log(casePlusInputValue);

    // const incrementValue = casePlusInputValue + 1;

    const incrementValue = incrementValeByOne(casePlusInputValue);


    // ** set the case input value after the button clicked

    setInputValue('case-number-input',incrementValue);



})