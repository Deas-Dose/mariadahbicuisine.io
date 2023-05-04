window.onload = function () {
  const recetteContainer = document.getElementById("recette-container");
  for (let i = 0; i < recettesDB.length; i++) {
    const recette = recettesDB[i];
    recetteContainer.innerHTML += `
      <div class="recette">
      <img class="recette-image" src="${recette.image}">
      <h3 class="recette-titre">${recette.name}</h3>
        <p class="recette-categorie">Catégorie: ${recette.category}</p>
        <p class="recette-duree">Durée de préparation: ${recette.duration}</p>
        <p class="recette-origine">Origine: ${recette.country}</p>
        <p class="recette-note">Note globale: ${recette.global}</p>
        <button class="recette-button" id="details-button-${recette.id}">Détails</button>
      </div>
    `

  }
}
