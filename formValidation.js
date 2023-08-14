export function formValidation (projectName, projectDescripton, projectRating) {

    const isNameValid = /^[A-Za-z0-9_.]+$/.test(projectName);
    const isDescriptionValid = /^[A-Za-z0-9_.]+$/.test(projectDescripton);
    
    if (projectRating === 0) {
        window.alert("Must select a difficulty rating!");
    } else if (!isDescriptionValid) {
        window.alert("Description must be entered and valid!");
    } else if (!isNameValid) {
        window.alert("Name must be entered and valid!");
    }
}