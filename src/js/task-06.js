// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

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

// 2

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