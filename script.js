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
    const projectDescription = document.querySelector(
      "input[name=description]"
    ).value;
    const projectRating = Number(
      document.querySelector("select[name=rating]").value
    );

    const isFormValid = formValidation(
      projectName,
      projectDescription,
      projectRating
    );

    if (isFormValid) {
      let cardToPush = { projectName, projectDescription, projectRating };

      cardSubmittedArr.push(cardToPush);
      renderCards(cardSubmittedArr);
    }
  });

  // const del = document.getElementsByClassName(".delete-btn");
  // del.addEventListener("click", function(card) {
  // let index = cardSubmittedArr.indexOf(card.projectName)
  // console.log(index);
  // cardSubmittedArr.splice(index,1);
  // });
  // })
  // del.forEach(function (check) {
  //   check.addEventListener("click", function () {
  //     let index = cardSubmittedArr.findIndex(project => project.projectName == projectName);
  //     cardSubmittedArr.splice(index,1);
  //     console.log("clicked")
  //   });
  // });
  // let projName = cardSubmittedArr.forEach((card) => card.projectName);

  const boardContainer = document.getElementById("board-container");
  boardContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const index = cardSubmittedArr.findIndex(
        (projName) => this.projName == projName
      );
      cardSubmittedArr.splice(index, 1);
    }
  });
});
