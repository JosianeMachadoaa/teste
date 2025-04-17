// Função para abrir o popup
function openDonationPopup() {
  document.getElementById("donationPopup").style.display = "block";
}

// Função para fechar o popup
function closeDonationPopup() {
  document.getElementById("donationPopup").style.display = "none";
}

// Função para lidar com a seleção de valor
document.querySelectorAll('.donation-option').forEach(button => {
  button.addEventListener('click', function() {
    alert('Você escolheu doar R$ ' + this.textContent);
    closeDonationPopup(); // Fecha o popup após a seleção
  });
});
