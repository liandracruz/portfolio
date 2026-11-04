document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
      const container = card.querySelector(".carousel-container");
      const prevBtn = card.querySelector(".prev-btn");
      const nextBtn = card.querySelector(".next-btn");

      if (!container || !prevBtn || !nextBtn) return;

      // Função que verifica a posição do scroll e ativa/desativa as setas
      const updateButtonsState = () => {
        const scrollLeft = container.scrollLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (scrollLeft <= 1) {
          prevBtn.classList.add("disabled");
        } else {
          prevBtn.classList.remove("disabled");
        }

        if (scrollLeft >= maxScrollLeft - 1) {
          nextBtn.classList.add("disabled");
        } else {
          nextBtn.classList.remove("disabled");
        }
      };

      updateButtonsState();

      // Atualiza o estado sempre que o usuário rolar o carrossel
      container.addEventListener("scroll", updateButtonsState);

      
      const getScrollAmount = () => {
        const img = container.querySelector(".carousel-image");
        if (!img) return container.clientWidth;
        
        return img.clientWidth;
      };

      // Evento de clique na seta direita
      nextBtn.addEventListener("click", () => {
        container.scrollBy({
          left: getScrollAmount(),
          behavior: "smooth"
        });
      });

      // Evento de clique na seta esquerda
      prevBtn.addEventListener("click", () => {
        container.scrollBy({
          left: -getScrollAmount(),
          behavior: "smooth"
        });
      });
    });
  });