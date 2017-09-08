  var link = document.querySelector(".map-wrapper .button");
  var popup = document.querySelector(".feedback");
  var close = document.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var feedbackName = popup.querySelector("[name=name]");
  var feedbackEmail = popup.querySelector("[name=email]");
  var feedbackText = popup.querySelector("[name=text]");
  var storageName = localStorage.getItem("feedbackName");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-open");
    if (storageName) {
      feedbackName.value = storageName;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("feedback-open");
    popup.classList.remove("modal-error")
  });

  form.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("feedbackName", feedbackName.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("feedback-open")) {
        popup.classList.remove("feedback-open");
        popup.classList.remove("modal-error");
      }
    }
  });
