document.getElementById("submit").addEventListener("click", function(event) {
    var form = document.getElementsByClassName('form-validation');
    event.preventDefault();

    for (var i = 0; i < 4; i++) {
      if(form[0][i].value == "") {
        //Add validation error msg
        form[0][i].classList.add("card__form--validation");
        document.getElementsByClassName("is-invalid")[i].innerHTML = form[0][i].placeholder + ' cannot be empty';
        form[0][i].nextElementSibling.style.display = "block";
      }
      else {
        //Remove the validation
        form[0][i].classList.remove("card__form--validation");
        form[0][i].nextElementSibling.style.display = "none";
      }
    }
    
    //Validate email address format
    const valid_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(form[0][2].value !== "" && !valid_email.test(form[0][2].value)) {
      form[0][2].classList.add("card__form--validation");
      document.getElementsByClassName("is-invalid")[2].innerHTML = 'Looks like this is not an email';
      form[0][2].nextElementSibling.style.display = "block";
    }
});