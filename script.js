function rating(){
    const select = document.getElementById("rating");
    for (var i = 0; i < 10; i++){
    select.options[select.options.length] = new Option(i+1, i);
  }
}
rating();