let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      display.value = '';
    } else if (button.id === 'backspace') {
      display.value = display.value.slice(0, -1);
    } else if (button.id === 'equals') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += button.innerText;
    }
  });
});
