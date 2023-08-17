
export function renderCards(arr) {
  const boardContainer = document.getElementById("board-container");

  boardContainer.innerHTML = "";
  arr.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <button type="button" class="delete-btn" onclick="this.parentNode.remove()">
       x
        </button>
        <h1>${card.projectName}</h1>
        <p>${card.projectDescription}</p>
        <p>${card.projectRating}</p>
      `;
    boardContainer.appendChild(cardElement);
  });
}
// button deletes it from view but saves in memory so if user resubmits card itll populate two instead of one if one was already filled out. will need to fix.
