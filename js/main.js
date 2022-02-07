let email = document.querySelector(".emailInput");
let msg = document.querySelector(".validation");
let emailButton = document.querySelector(".emailButton")
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;
emailButton.addEventListener("click", function (e) {
  e.preventDefault()
  if (!email.value.match(pattern)) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (email.value == "") {
    msg.style.display = "block";
  }
});
