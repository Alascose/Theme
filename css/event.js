var buttons = document.getElementsByClassName('.indexe');

// Fonction pour enregistrer l'index du bouton actif dans le stockage local
function setActiveButton(index) {
  localStorage.setItem('activeButtonIndex', index);
}

// Fonction pour obtenir l'index du bouton actif depuis le stockage local
function getActiveButton() {
  return localStorage.getItem('activeButtonIndex');
}

// Ajouter un écouteur d'événement à chaque bouton
buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    // Supprimer la classe 'active' de tous les boutons
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Ajouter la classe 'active' uniquement au bouton cliqué
    button.classList.add('active');
    // Enregistrer l'index du bouton cliqué dans le stockage local
    setActiveButton(index);
  });
});

// Récupérer l'index du bouton actif depuis le stockage local
var activeButtonIndex = getActiveButton();
if (activeButtonIndex !== null) {
  buttons[activeButtonIndex].classList.add('active');
}
