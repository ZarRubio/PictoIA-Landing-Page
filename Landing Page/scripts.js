$(document).ready(function () {
  var roomPrice = 2;

  $("#room-count").on("input", function () {
    var roomCount = $(this).val();
    var totalPrice = roomCount * roomPrice;
    $("#price").text("S/ " + totalPrice.toFixed(2));
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const roomCountInput = document.getElementById("room-count");
    const questionText = document.querySelector(".question-container h3");
    const priceText = document.getElementById("price");

    roomCountInput.addEventListener("focus", function () {
      questionText.classList.add("input-active");
      roomCountInput.classList.add("input-box-active");
      priceText.classList.add("input-active");
    });

    roomCountInput.addEventListener("blur", function () {
      questionText.classList.remove("input-active");
      roomCountInput.classList.remove("input-box-active");
      priceText.classList.remove("input-active");
    });
  });


