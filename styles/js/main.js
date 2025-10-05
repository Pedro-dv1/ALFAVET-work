(function () {
  const KEY = 'cookieConsentAccepted_v1';
  const consent = localStorage.getItem(KEY);
  const container = document.getElementById('cookieConsent');
  const btn = document.getElementById('btnCookieAccept');

  function showConsent() {
    container.classList.add('show');
    container.setAttribute('aria-hidden', 'false');
  }
  function hideConsent() {
    container.classList.remove('show');
    container.setAttribute('aria-hidden', 'true');
  }

  if (consent === 'true') {
    hideConsent();
    return;
  }

  window.addEventListener('load', function () {
    if (container) showConsent();
  });

  btn.addEventListener('click', function () {
    try {
      localStorage.setItem(KEY, 'true');
    } catch (e) {
      console.warn('Não foi possível salvar a preferência de cookies:', e);
    }
    hideConsent();
  });

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && container.classList.contains('show')) {
      hideConsent();
    }
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById('exampleFormControlTextarea1');

  textarea.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
});

//firebase API

const firebaseConfig = {
  apiKey: "AIzaSyCuwMaLfLne-NKyWC7vF8hNE_yVsZHl1tE",
  authDomain: "logapi-7478e.firebaseapp.com",
  projectId: "logapi-7478e",
  storageBucket: "logapi-7478e.appspot.com",
  messagingSenderId: "859474666927",
  appId: "1:859474666927:web:e4ad53ec5c8070bd87fb5a",
  measurementId: "G-WV6MP9HH5C"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById("google-login-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          alert("Bem-vindo, " + user.displayName);
          console.log("Usuário logado:", user);
          const modalElement = document.getElementById('exampleModal');
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance.hide();
        })
        .catch(error => {
          console.error("Erro no login:", error);
          alert("Erro: " + error.message);
        });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const selectCity = document.querySelector("select");
  const searchInput = document.querySelector("input[name='q']");
  const cityCards = document.querySelectorAll(".city-cards");


  function filterCards() {
    const selectedCity = selectCity.value.toLowerCase();
    const searchText = searchInput.value.toLowerCase();

    cityCards.forEach(card => {
      const city = card.getAttribute("data-city").toLowerCase();
      const text = card.innerText.toLowerCase();


      if (
        (selectedCity === "todos" || selectedCity === city) &&
        (text.includes(searchText) || searchText === "")
      ) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  }

  selectCity.addEventListener("change", filterCards);
  searchInput.addEventListener("input", filterCards);

  selectCity.value = "todos";
  filterCards();
});

document.addEventListener("DOMContentLoaded", function () {
  const selectCity = document.getElementById("city-select");
  const searchInput = document.getElementById("search-input");
  const cityCards = document.querySelectorAll(".card-city");

  function filterCards() {
    const selectedCity = selectCity.value.toLowerCase();
    const searchText = searchInput.value.toLowerCase();

    cityCards.forEach(card => {
      const city = card.getAttribute("data-city").toLowerCase();
      const text = card.innerText.toLowerCase();

      const matchesCity = (selectedCity === "todos" || selectedCity === city);
      const matchesText = (text.includes(searchText) || searchText === "");

      if (matchesCity && matchesText) {
        card.classList.remove("d-none");
      } else {
        card.classList.add("d-none");
      }
    });
  }

  selectCity.addEventListener("change", filterCards);
  searchInput.addEventListener("input", filterCards);

  selectCity.value = "todos";
  filterCards();
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");

  whatsappBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const phone = "5517997585762";

    const message = "Olá, vi o site da ALFAVET e gostaria de saber como funciona o atendimento e o agendamento para meu pet. Pode me ajudar?";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  });
});

function toggleOutroInput() {
    const especieSelect = document.getElementById('especieSelect');
    const outroContainer = document.getElementById('outroEspecieContainer');
    
    if (especieSelect.value === 'Outro') {
        outroContainer.style.display = 'block';
    } else {
        outroContainer.style.display = 'none';
        document.getElementById('outroEspecie').value = '';
    }
}

// Botão "Voltar ao Topo" - Versão corrigida
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) {
        console.error('Botão backToTop não encontrado!');
        return;
    }

    console.log('Botão backToTop encontrado, script funcionando...');

    // Função para mostrar/ocultar o botão
    function toggleBackToTop() {
        console.log('Scroll Y:', window.scrollY);
        
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
            console.log('Botão MOSTRADO');
        } else {
            backToTopButton.classList.remove('show');
            console.log('Botão OCULTADO');
        }
    }

    // Função para voltar ao topo suavemente
    function scrollToTop(e) {
        if (e) e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Event Listeners
    window.addEventListener('scroll', toggleBackToTop);
    backToTopButton.addEventListener('click', scrollToTop);

    // Verificar posição inicial
    toggleBackToTop();
});