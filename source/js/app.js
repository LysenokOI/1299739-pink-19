function modalSend() {
  var btnConfirm = document.querySelector(".form__button");
  var mdlConfirm = document.querySelector(".modal__sent");
  var mdlClose = mdlConfirm.querySelector(".modal__button");

  btnConfirm.addEventListener("click", function (e) {
    e.preventDefault();
    mdlConfirm.classList.add("modal__show");
  });

  mdlClose.addEventListener("click", function (e) {
    e.preventDefault();
    mdlConfirm.classList.remove("modal__show");
  });
}

modalSend();

