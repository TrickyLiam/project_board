export function formValidation(projectName, projectDescripton, projectRating) {
  const isNameValid = /^[A-Za-z0-9_.]+$/.test(projectName);
  const isDescriptionValid = /^[A-Za-z0-9_.]+$/.test(projectDescripton);

  if (!isNameValid) {
    window.alert("Name must be entered and valid!");
    return false;
  } else if (!isDescriptionValid) {
    window.alert("Description must be entered and valid!");
    return false;
  } else if (projectRating === 0) {
    window.alert("Must select a difficulty rating!");
    return false;
  } else {
    return true;
  }
}
