var feedbackLink = document.querySelector(".contacts-button");

var popupOverlay = document.querySelector(".modal-overlay");
var popupClose = popupOverlay.querySelector(".close-button");

var feedbackForm = popupOverlay.querySelector(".feedback-form");
var feedbackName = feedbackForm.querySelector("[name=feedback-name]");
var feedbackEmail = feedbackForm.querySelector("[name=feedback-email]");
var feedbackMessage = feedbackForm.querySelector("[name=feedback-message]");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOverlay.classList.add("modal-show");
  feedbackName.focus();
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOverlay.classList.remove("modal-show");
  feedbackName.classList.remove("modal-invalid");
  feedbackEmail.classList.remove("modal-invalid");
  feedbackMessage.classList.remove("modal-invalid");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value) {
    evt.preventDefault();
    feedbackName.classList.add('modal-invalid');
  } else {
    feedbackName.classList.remove('modal-invalid');
  }
  if (!feedbackEmail.value) {
    evt.preventDefault();
    feedbackEmail.classList.add('modal-invalid');
  } else {
    feedbackEmail.classList.remove('modal-invalid');
  }
  if (!feedbackMessage.value) {
    evt.preventDefault();
    feedbackMessage.classList.add('modal-invalid');
  } else {
    feedbackMessage.classList.remove('modal-invalid');
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupOverlay.classList.contains("modal-show")) {
      popupOverlay.classList.remove("modal-show");
      feedbackName.classList.remove("modal-invalid");
      feedbackEmail.classList.remove("modal-invalid");
      feedbackMessage.classList.remove("modal-invalid");
    }
  }
});