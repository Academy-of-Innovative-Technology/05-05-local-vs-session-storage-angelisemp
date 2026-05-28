let submit2 = document.querySelector(".submit2");

submit2.addEventListener("click", function(e) {
 let phrase = document.querySelector("#sessionContent").value;
 let content = document.querySelector("#localContent").value;
    // localStorage here
  
  localStorage.getItem("localContent", localContent)
  
  // sessionStorage here

sessionStorage.getItem("sessionStorage", sessionContent)
});