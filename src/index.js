//This functions is help us with th UI and how we show the results also we can copy the poem.

function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 'natural',
    });
    document.querySelector("#copy-button").classList.remove("hidden");
  }

  //Function to handle the user input and generate a poem. Here we use the SheCodes AI API. 
  //We give the instructions to get API response, using the prompt and context.
  
  function generatePoem(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "c71f439f65td859373faeeba102o0222";
    let context = "You are a Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. After the poem, Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayPoem);
  }
  
  //Event listener for the form submission
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);

  function copyPoem() {
    let poemText = document.querySelector("#poem").innerText;
    navigator.clipboard.writeText(poemText).then(() => {
        alert("Copy successfully!");
    }).catch(err => {
        alert("Error copying the poem.");
    });
}

// Add event listener to the copy button
let copyButtonElement = document.querySelector("#copy-button");
copyButtonElement.addEventListener("click", copyPoem);