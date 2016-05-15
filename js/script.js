      var link = document.querySelector(".enter-image");

      
      var popup = document.querySelector(".enter-content");

      var close = popup.querySelector(".btn-4");
      var form = popup.querySelector("form");

      var login = popup.querySelector("[name=login]");
      var password = popup.querySelector("[name=password]");

      var storage = localStorage.getItem("login");
      
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("enter-content-show");

          if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

      });
        close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("enter-content-show");
         popup.classList.remove("modal-error");
      });
        form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          console.log("Нужно ввести логин и пароль"); 
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
        }
      });

        window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("enter-content-show")) {
            popup.classList.remove("enter-content-show");
             popup.classList.remove("modal-error");
          }
        }
      });
   