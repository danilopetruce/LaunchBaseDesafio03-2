const modalOverlay = document.querySelector(".modal_overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const imgId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    //modal.classList.add("maximize");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${imgId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
  modal.classList.remove("maximize");
});

document.querySelector(".maximize-modal").addEventListener("click", function() {
  modal.classList.add("maximize");
});
