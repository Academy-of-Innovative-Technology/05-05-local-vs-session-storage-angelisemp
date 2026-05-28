let submit2 = document.querySelector(".submit2");

submit2.addEventListener("click", function(e) {
 let phrase = document.querySelector("#sessionStorage").value;
 let content = document.querySelector("#localContent").value;
    // localStorage here
  
  localStorage.setItem("content", localContent)
  
  // sessionStorage here

sessionStorage.setItem("phrase", sessionStorage)
});