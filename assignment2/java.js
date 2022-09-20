//referenced from class example and w3schools.com

const button = document.querySelector('#my-button');
button.addEventListener('click', () => {
   
    // text input, outputs it in console 
  const textInput = document.querySelector('#name');
  console.log(textInput.value);
  
  // text input, outputs it in console 
  const textArea = document.querySelector('#text-area');
  console.log(textArea.value);

  // color input; changes checkbox area color only
  const colorInput = document.querySelector('#color-input');
  const options = document.querySelector('#options1');
  options.style.backgroundColor = colorInput.value;

  //checkboxes input, find out which are selected, print to console t/f
  const checkboxesElement = document.querySelector('#options1');
  const checkboxes = checkboxesElement.querySelectorAll('input');
  for (const checkbox of checkboxes) {
    console.log(checkbox.checked);

}

});

// disable form from refreshing the page when you press enter
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
