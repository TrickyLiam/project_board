import { formValidation } from "./formValidation.js";
import { rating } from "./Rating.js";

window.addEventListener("load", function () {
  // const submitButton = document.getElementById("submitButton");
  const projectForm = document.querySelector("form");
  const boardContainer = document.getElementById("board-container");
  const ratingButton = document.getElementById("rating");
  

  ratingButton.addEventListener("click", (e) => {
    rating();
}, { once: true });

  projectForm.addEventListener("submit", function (e) {
    const projectName = document.querySelector("input[name=project]").value;
    const projectDescripton = document.querySelector("input[name=description]").value;
    const projectRating = Number(document.querySelector("select[name=rating]").value);
    
    
    formValidation(projectName, projectDescripton, projectRating);
      
    boardContainer.innerHTML = `
      <div id="board-container">
      <h1>${projectName}</h1>
      <p>${projectDescripton}</p>
      <p>${projectRating}</p>
      </div>
      `;
      
    //   const newDiv = document.createElement("div");
    //   newDiv.innerHTML = `
    //   <div id="board-container">
    //   <h1>${projectName}</h1>
    //   <p>${projectDescripton}</p>
    //   <p>${projectRating}</p>
    //  </div>
    //  `;
      
    // boardContainer.appendChild(newDiv);
    e.preventDefault();
   
  });
  });
