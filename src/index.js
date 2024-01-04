function generatePoem (event){
    event.preventDefault()

    new Typewriter('#poem', {
        strings: "Your poem",
        autoStart: true,
        delay: 'natural',
      });
}

let poemFormElement= document.querySelector("#poem-generator-form");
poemFormElement.addEventListener ("submit",generatePoem);