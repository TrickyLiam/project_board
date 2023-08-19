import { formValidation } from "./formValidation.js";
import { rating } from "./Rating.js";
import { renderCards } from "./renderCards.js";

window.addEventListener("load", function () {
  const projectForm = document.querySelector("form");
  const boardContainer = document.getElementById("board-container");
  const ratingButton = document.getElementById("rating");
  const cardSubmittedArr = [];

  ratingButton.addEventListener("click", (e) => {
    rating();
  }, { once: true }
  );
  
  projectForm.addEventListener("submit", function (e) {
    e.preventDefault();

   
    const projectName = document.querySelector("input[name=project]").value;
    const projectDescription = document.querySelector("input[name=description]").value;
    const projectRating = Number(document.querySelector("select[name=rating]").value);
  
    
    let isFormValid = formValidation(projectName, projectDescription, projectRating);

    if (isFormValid) {
      let cardToPush = { projectName, projectDescription, projectRating };
      cardSubmittedArr.push(cardToPush);
      renderCards(cardSubmittedArr);
    }
  });
  
  boardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      let index = cardSubmittedArr.findIndex(
        (projName) => this.projName == projName
      );
      cardSubmittedArr.splice(index, 1);
    }
  });

  boardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      boardContainer.contentEditable = true;
    }
  });

  boardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("done-btn")) {
      boardContainer.contentEditable = false;
    }
  });

  });

