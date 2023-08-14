import { formValidation } from "./formValidation.js";
import { rating } from "./Rating.js";
import { renderCards } from "./renderCards.js";

window.addEventListener("load", function () {
  // const submitButton = document.getElementById("submitButton");
  const projectForm = document.querySelector("form");
  const ratingButton = document.getElementById("rating");
  const cardSubmittedArr = [];

  ratingButton.addEventListener(
    "click",
    (e) => {
      rating();
    },
    { once: true }
  );
  // const deleteBtn= document.getElementById("delete-btn");
  // const boardContainer = document.getElementById("board-container");
  
  
  // deleteBtn.addEventListener("click", function() {
  //   boardContainer.remove();
  // })
  projectForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const projectName = document.querySelector("input[name=project]").value;
    const projectDescripton = document.querySelector(
      "input[name=description]"
    ).value;
    const projectRating = Number(
      document.querySelector("select[name=rating]").value
    );

    const isFormValid = formValidation(
      projectName,
      projectDescripton,
      projectRating
    );
    if (isFormValid) {
      let cardToPush = { projectName, projectDescripton, projectRating };
      cardSubmittedArr.push(cardToPush);
      renderCards(cardSubmittedArr);
    }
  });


});
