 (function(){
      const card = document.getElementById('visitCard');

      // Ao clicar/tocar no cartão, dá flip
      card.addEventListener('click', function(e){
        card.classList.toggle('flip');
        const pressed = card.classList.contains('flip');
        card.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      });

      // Permitir usar teclado (Enter / Espaço)
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          card.classList.toggle('flip');
          const pressed = card.classList.contains('flip');
          card.setAttribute('aria-pressed', pressed ? 'true' : 'false');
        }
      });
    })();