import { formValidation } from "./formValidation.js";
import { rating } from "./Rating.js";
import { renderCards } from "./renderCards.js";

window.addEventListener("load", function () {
  // const submitButton = document.getElementById("submitButton");
  const projectForm = document.querySelector("form");
  const boardContainer = document.getElementById("board-container");
  const ratingButton = document.getElementById("rating");
  const cardSubmittedArr = [];
  

  ratingButton.addEventListener("click", (e) => {
    rating();
}, { once: true });

  projectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const projectName = document.querySelector("input[name=project]").value;
    const projectDescripton = document.querySelector("input[name=description]").value;
    const projectRating = Number(document.querySelector("select[name=rating]").value);
    
    
    formValidation(projectName, projectDescripton, projectRating);

    let cardToPush = { projectName, projectDescripton, projectRating };
    cardSubmittedArr.push(cardToPush);

    renderCards(cardSubmittedArr);
    
  
    });
  });
