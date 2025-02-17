document.addEventListener("DOMContentLoaded", function() {
  let pumpInterval;
  let currentPrice = 0;

  // Función para mostrar una pantalla y ocultar las demás
  function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
  }

  // Funciones para abrir y cerrar modales
  window.openModal = function(modalId) {
    document.getElementById(modalId).style.display = "flex";
  };

  window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = "none";
  };

  // Navegación entre pantallas
  document.getElementById("start-btn").addEventListener("click", function() {
    showScreen("meeting1-screen");
  });

  document.getElementById("meeting1-btn").addEventListener("click", function() {
    showScreen("meeting2-screen");
  });

  document.getElementById("meeting2-btn").addEventListener("click", function() {
    showScreen("pump-screen");
    startPumpSimulation();
  });

  // Simulación del pump: inicia el precio bajo y se incrementa artificialmente
  function startPumpSimulation() {
    currentPrice = 0.2; // Precio inicial muy bajo
    updatePriceDisplay();
    pumpInterval = setInterval(() => {
      currentPrice += Math.random() * 0.5;
      updatePriceDisplay();
    }, 1000);
  }

  function updatePriceDisplay() {
    document.getElementById("price-display").textContent = "Precio actual: $" + currentPrice.toFixed(2);
  }

  // Al ejecutar la venta coordinada, el usuario se vuelve millonario: $87,000,000
  document.getElementById("sell-btn").addEventListener("click", function() {
    clearInterval(pumpInterval);
    currentPrice = 87000000; // 87 millones de dólares
    document.getElementById("final-price").textContent = "Valor final: $" + currentPrice.toLocaleString();
    document.getElementById("sale-message").textContent = "¡Felicidades! Has ejecutado la venta coordinada y te llevas $87,000,000 dólares.";
    showScreen("sale-screen");
  });

  // Pasar a la pantalla final con evidencia y explicación
  document.getElementById("final-btn").addEventListener("click", function() {
    showScreen("final-screen");
  });

  // Reiniciar el juego
  document.getElementById("restart-btn").addEventListener("click", function() {
    clearInterval(pumpInterval);
    currentPrice = 0;
    showScreen("start-screen");
  });
});
