// Code by Yuliza Saucedo
// Online reference from: 
// https://github.com/chandan-02/anime-facts-rest-api
// https://www.javascripttutorial.net/javascript-fetch-api/
// https://www.w3schools.com/jsref/api_fetch.asp
// https://www.youtube.com/watch?v=uxf0--uiX0I
// and class example

function dsfacts(){  
  fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(json => {
       
      for (const animef of json.data) {
        // console.log(animef);
        const paragraph = document.createElement('p');
        paragraph.innerText = animef.fact;
        document.body.appendChild(paragraph);
      }
    })
    .catch(error => {
      console.error(error);
    });
};
dsfacts(); 
