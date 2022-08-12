const asideHidden = document.querySelector(".aside-hidden");
const submit = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () =>{
  asideHidden.classList.remove("hidden");
});

rates.forEach(rate => {
  rate.addEventListener("click", () =>{
    rating.innerHTML = rate.innerHTML;  //Se obtiene el valor del puntaje que esta cliqueado en eso momento al rate con innerHTML, y se le asigna al rating.
  })
});