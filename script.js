// Objectif total 
const goalAmount = 30000;

// Montant déjà collecté 
let currentAmount = 3200;

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const amountCollected = document.getElementById("amount-collected");

  // Calcul du pourcentage
  const percentage = Math.min((currentAmount / goalAmount) * 100, 100);
  
  // Mise à jour de la largeur de la barre
  progressBar.style.width = percentage + "%";
  
  // Mise à jour du texte
  amountCollected.textContent = currentAmount.toLocaleString() + " €";
}

// Appel initial
updateProgressBar();