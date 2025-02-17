document.addEventListener("DOMContentLoaded", function() {
  let pumpInterval;
  let currentPrice = 0;
  const conversationLines = [
    "Tú: Tenemos que planificar el Master Plan para $LIBRA. Los tokens se repartirán a valor cero.",
    "InSider 1: ¿Están seguros de que esto funcionará? Controlaremos el 70% con 9 insiders.",
    "Javier Milei: Confíen en mí, con mi tweet el precio se disparará. ¡Será épico!",
    "InSider 2: Los bots están listos para activar el pump. El mercado no sabrá qué lo golpeó.",
    "Tú: Perfecto. En el pico, venderemos todos nuestros tokens de forma coordinada.",
    "Javier Milei: El tweet está preparado. Es hora de hacer historia y llenarnos de millones.",
    "InSider 3: ¡A ganar se ha dicho! Este plan nos hará ricos.",
    "Tú: Entonces, pongamos manos a la obra. ¡Master Plan activado!"
  ];
  let convIndex = 0;

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

  // Navegación
  document.getElementById("start-btn").addEventListener("click", function() {
    showScreen("meeting1-screen");
  });

  document.getElementById("meeting1-btn").addEventListener("click", function() {
    showScreen("conversation-screen");
    convIndex = 0;
    updateConversation();
  });

  document.getElementById("conv-next-btn").addEventListener("click", function() {
    convIndex++;
    if (convIndex < conversationLines.length) {
      updateConversation();
    } else {
      showScreen("pump-screen");
      startPumpSimulation();
    }
  });

  function updateConversation() {
    const convBox = document.getElementById("conversation-box");
    convBox.classList.remove("visible");
    // Para dar efecto de fade, esperar 100ms y luego actualizar
    setTimeout(() => {
      document.getElementById("conversation-text").textContent = conversationLines[convIndex];
      convBox.classList.add("visible");
    }, 100);
  }

  // Simulación del pump: inicia con precio bajo y se incrementa artificialmente
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

  // Venta coordinada: se asigna ganancia de 87.4 millones
  document.getElementById("sell-btn").addEventListener("click", function() {
    clearInterval(pumpInterval);
    currentPrice = 87400000; // 87.4 millones
    document.getElementById("final-price").textContent = "Valor final: $" + currentPrice.toLocaleString();
    document.getElementById("sale-message").textContent = "¡Felicidades! Has ejecutado la venta coordinada y te llevas $87,400,000 dólares.";
    showScreen("sale-screen");
  });

  document.getElementById("final-btn").addEventListener("click", function() {
    showScreen("final-screen");
  });

  document.getElementById("restart-btn").addEventListener("click", function() {
    clearInterval(pumpInterval);
    currentPrice = 0;
    showScreen("start-screen");
  });
});
