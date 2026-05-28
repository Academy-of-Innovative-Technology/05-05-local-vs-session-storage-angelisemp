let submit = document.querySelector(".submit");

submit.addEventListener("click", function(e) {
 let date = document.querySelector("#date").value;
 let riddle = document.querySelector("#riddle").value;


  e.preventDefault();
    // localStorage here
  
  localStorage.setItem("date", date)
  
  // sessionStorage here

sessionStorage.setItem("riddle", riddle)
});