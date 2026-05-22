let submit = document.querySelector(".submit");

 let date = document.querySelector("#date").value;

submit.addEventListener("click", function(e) {
  e.preventDefault();
    // localStorage here
  
  localStorage.getItem("local storage", "#date")
  
  // sessionStorage here

sessionStorage.getItem("riddle", "#date")
});