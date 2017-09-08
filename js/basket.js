  var basketLink = document.querySelector(".slide .button");
  var basketButton = document.querySelector(".basket-link-button");
  var basketWrapper = document.querySelector(".basket-link-wrapper");

  basketLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketButton.classList.add("basket-button-full");
    basketWrapper.classList.add("basket-full");
  });
