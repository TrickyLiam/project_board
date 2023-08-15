export function renderCards(arr) {
    const boardContainer = document.getElementById("board-container");

  boardContainer.innerHTML = "";
  arr.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <button type="button" id="delete-btn" onclick="return this.parentNode.remove()">
        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.99862 0.000121978C9.73374 0.00426239 9.48133 0.113322 9.29678 0.303366C9.11223 0.49341 9.01061 0.748911 9.01424 1.01379V1.51379H3.51424C3.38178 1.512 3.25028 1.53653 3.12738 1.58598C3.00447 1.63543 2.89262 1.7088 2.79831 1.80184C2.704 1.89488 2.62912 2.00572 2.578 2.12794C2.52689 2.25016 2.50057 2.38132 2.50057 2.51379H1.01424C0.881731 2.51192 0.750168 2.5364 0.6272 2.58581C0.504231 2.63523 0.39231 2.70859 0.297941 2.80163C0.203571 2.89468 0.128635 3.00555 0.077487 3.12781C0.0263393 3.25007 0 3.38127 0 3.51379C0 3.64632 0.0263393 3.77752 0.077487 3.89978C0.128635 4.02204 0.203571 4.13291 0.297941 4.22595C0.39231 4.319 0.504231 4.39236 0.6272 4.44177C0.750168 4.49119 0.881731 4.51567 1.01424 4.51379H19.0142C19.1468 4.51567 19.2783 4.49119 19.4013 4.44177C19.5243 4.39236 19.6362 4.319 19.7305 4.22595C19.8249 4.13291 19.8999 4.02204 19.951 3.89978C20.0021 3.77752 20.0285 3.64632 20.0285 3.51379C20.0285 3.38127 20.0021 3.25007 19.951 3.12781C19.8999 3.00555 19.8249 2.89468 19.7305 2.80163C19.6362 2.70859 19.5243 2.63523 19.4013 2.58581C19.2783 2.5364 19.1468 2.51192 19.0142 2.51379H17.5279C17.5279 2.38132 17.5016 2.25016 17.4505 2.12794C17.3994 2.00572 17.3245 1.89488 17.2302 1.80184C17.1359 1.7088 17.024 1.63543 16.9011 1.58598C16.7782 1.53653 16.6467 1.512 16.5142 1.51379H11.0142V1.01379C11.0161 0.880004 10.991 0.747208 10.9406 0.623267C10.8902 0.499327 10.8154 0.386763 10.7207 0.292242C10.626 0.197721 10.5133 0.123164 10.3893 0.072987C10.2652 0.0228097 10.1324 -0.00196763 9.99862 0.000121978ZM1.01424 6.51379L2.80721 21.7482C2.92521 22.7552 3.77759 23.5138 4.79159 23.5138H15.2369C16.2509 23.5138 17.1023 22.7552 17.2213 21.7482L19.0142 6.51379H1.01424Z" fill="white"/>
        </svg>
        </button>
        <h1>${card.projectName}</h1>
        <p>${card.projectDescription}</p>
        <p>${card.projectRating}</p>
      `;
      boardContainer.appendChild(cardElement);
    });
  }
    