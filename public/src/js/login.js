
let username = document.querySelector("#username");
let password = document.querySelector("#password");

//------------- Trigger Button Click on Enter--------------------
username.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    StartLogin();
  }
});
password.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    StartLogin();
  }
});

//------------------- StartLogin -----------------
function StartLogin(){
	if(username.value == "" || username.value == null){username.style.border = "3px solid #f00";}
	if(password.value == "" || password.value == null){password.style.border = "3px solid #f00";}
	
	location.replace("/dashboard")
}