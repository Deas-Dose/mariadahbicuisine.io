// Récupération du conteneur des recettes
// Récupération du conteneur des recettes
const recettesContainer = document.getElementById('recettes-container');

// Sélection aléatoire de 3 recettes à partir du tableau d'objets recettes
const recettesAleatoires = [];
while (recettesAleatoires.length < 3) {
  const indexAleatoire = Math.floor(Math.random() * recettesDB.length);
  if (!recettesAleatoires.includes(recettesDB[indexAleatoire])) {
    recettesAleatoires.push(recettesDB[indexAleatoire]);
  }
}

// Affichage des recettes dans le HTML
recettesAleatoires.forEach(recette => {
  const recetteHTML = `
    <div class="recette">
      <img src="${recette.image}" alt="Image de la recette">
      <h2>${recette.name}</h2>
      <p>${recette.category}</p>
      <p>${recette.duration}</p>
      <p>${recette.country}</p>
    </div>
  `;
  recettesContainer.insertAdjacentHTML('beforeend', recetteHTML);
});