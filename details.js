window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recetteId = urlParams.get('id');
    
    const recette = recettesDB.find(r => r.id === recetteId);
    
    const recetteContainer = document.getElementById("recette-container");
    
    const recetteImage = document.createElement('img');
    recetteImage.className = 'recette-image';
    recetteImage.src = recette.image;
    
    const recetteTitre = document.createElement('h3');
    recetteTitre.textContent = recette.name;
    recetteTitre.className = 'recette-titre';
    
    const recetteCategorie = document.createElement('p');
    recetteCategorie.textContent = "Catégorie: " + recette.category;
    recetteCategorie.className = 'recette-categorie'; 
    
    const recetteDuree = document.createElement('p');
    recetteDuree.textContent = "Durée de préparation: " + recette.duration;
    recetteDuree.className = 'recette-duree';
    
    const recetteOrigine = document.createElement('p');
    recetteOrigine.textContent = "Origine: " + recette.country;
    recetteOrigine.className = 'recette-origine'; 
    
    const recetteNote = document.createElement('p');
    recetteNote.textContent = "Note globale: " + recette.comments.rating;
    recetteNote.className = 'recette-note'; 
    
    const recetteIngredients = document.createElement('p');
    recetteIngredients.textContent = "Ingrédients: " + recette.ingredients.join(", ");
    recetteIngredients.className = 'recette-ingredients';
    
    const recetteInstructions = document.createElement('p');
    recetteInstructions.textContent = "Instructions: " + recette.instructions;
    recetteInstructions.className = 'recette-instructions';
    
    recetteContainer.appendChild(recetteImage);
    recetteContainer.appendChild(recetteTitre);
    recetteContainer.appendChild(recetteCategorie);
    recetteContainer.appendChild(recetteDuree);
    recetteContainer.appendChild(recetteOrigine);
    recetteContainer.appendChild(recetteNote);
    recetteContainer.appendChild(recetteIngredients);
    recetteContainer.appendChild(recetteInstructions);
  }