export function rating() {
  const select = document.getElementById("rating");
  for (let i = 1; i <= 10; i++) {
    select.options[select.options.length] = new Option(i, i);
  }
}