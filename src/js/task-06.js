function onBlurBorderColor(event) {
    const inputValue = inputRef.getAttribute('data-length');
    
    if (inputRef.value.length === Number(inputValue)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length === 0) {
        inputRef.classList.remove('valid');
        inputRef.classList.remove('invalid');
    }
    if (inputRef.value.length !== Number(inputValue) && inputRef.value.length !== 0) {
        inputRef.classList.add('invalid');
    }
}


// const textInput = document.querySelector(`#validation-input`);
// let stringLength;
// textInput.addEventListener(`input`, onInputEvent);
// function onInputEvent(event) {
//   stringLength = event.currentTarget.value.length;
//   return stringLength;
// }
// textInput.addEventListener(`blur`, onInputBlur);
// function onInputBlur(event) {
//   if (stringLength !== Number(textInput.getAttribute(`data-length`))) {
//     textInput.classList.add("invalid");
//     textInput.classList.remove("valid");
//   } else {
//     textInput.classList.add("valid");
//     textInput.classList.remove("invalid");
//   }
// }