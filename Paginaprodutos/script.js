function addName() {
  var name = document.getElementById("name").value;
  var cardContainer = document.getElementById("card-container");
  var card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = name;
  cardContainer.appendChild(card);
}