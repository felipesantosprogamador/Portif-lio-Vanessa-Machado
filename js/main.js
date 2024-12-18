// Toggle do menu
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("hidden");
  });
  
  // Envio do formulário
  document.getElementById("agendamento-shows").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso!");
  });
  
  function openScheduleForm(showNumber) {
    document.getElementById("scheduleForm").style.display = "block";
    console.log("Agendamento para o show número:", showNumber);
  }
  
  function closeScheduleForm() {
    document.getElementById("scheduleForm").style.display = "none";
  }
  function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
  }  