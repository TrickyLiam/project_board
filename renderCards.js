export function renderCards() {
    
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
    }