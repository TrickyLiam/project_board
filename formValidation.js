const formValidation = (projectName, projectDescripton, projectRating) => {

    const isValid = /^[A-Za-z0-9_.]+$/.test(projectName, projectDescripton);
    
    if (!isValid || projectRating === 0) {
        window.alert("All fields must be valid!");
        return;
    }
}