const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const label2= document.querySelector(".not-verified");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});
function reset(){
    card_2.classList.add("hide");
    card_1.classList.remove("hide"); 
    label2.classList.add("hide");
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
      document.form.text1.focus();
  
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
      label2.classList.remove("hide");
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }