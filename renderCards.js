export function renderCards(arr) {
    const boardContainer = document.getElementById("board-container");

    boardContainer.innerHTML = '';
    arr.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <button id="delete-btn" type="reset">x<button/>
        <h1>${card.projectName}</h1>
        <p>${card.projectDescription}</p>
        <p>${card.projectRating}</p>
      `;
      boardContainer.appendChild(cardElement);
    });
  }
    