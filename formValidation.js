export function formValidation (projectName, projectDescription, projectRating) {

    const isNameValid = /^[A-Za-z0-9_.\s]+$/.test(projectName);
    const isDescriptionValid = /^[A-Za-z0-9_.\s]+$/.test(projectDescription);
    
    if (projectRating === 0) {
        window.alert("Must select a difficulty rating!");
        return false;
    } else if (!isDescriptionValid) {
        window.alert("Description must be entered and valid!");
        return false;
    } else if (!isNameValid) {
        window.alert("Name must be entered and valid!");
        return false;
    } else {
        return true;
    }
}