function slider(section) {
  var slider = document.querySelector(section);
  var button_prev = slider.querySelector(".js__prev");
  var button_next = slider.querySelector(".js__next");
  var slider_list = slider.querySelectorAll(".js__slider-item");

  button_next.addEventListener("click", function () {
    for (var i = 0; i < slider_list.length; i++) {
      if (slider_list[i].classList.contains("js__visible") && i === slider_list.length - 1) {
        slider_list[i].classList.remove("js__visible");
        slider_list[0].classList.add("js__visible");
        return;
      }
      if (slider_list[i].classList.contains("js__visible") && i < slider_list.length - 1) {
        slider_list[i].classList.remove("js__visible");
        slider_list[i + 1].classList.add("js__visible");
        return;
      }
    }
  });

  button_prev.addEventListener("click", function () {
    for (var i = 0; i < slider_list.length; i++) {
      if (slider_list[i].classList.contains("js__visible") && i === 0) {
        slider_list[i].classList.remove("js__visible");
        slider_list[slider_list.length - 1].classList.add("js__visible");
        return;
      }
      if (slider_list[i].classList.contains("js__visible") && 0 < i <= slider_list.length - 1) {
        slider_list[i].classList.remove("js__visible");
        slider_list[i - 1].classList.add("js__visible");
        return;
      }
    }
  });
}

if (document.querySelector(".comments") !== null) {
  slider(".comments");
}
