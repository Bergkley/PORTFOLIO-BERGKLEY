// ANIMAÇÃO DE DIGITAÇÃO
var typed = new Typed(".text", {
    strings: [
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  
  // ATIVAÇÃO DO MENU DE NAVEGACAO
  
  document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar a');
  
    function checkSectionInView() {
        let scrollPosition = window.scrollY + 200;
  
        navbarLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
  
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
  
                if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                    navbarLinks.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
  
        const pageHeight = document.body.clientHeight;
        const windowHeight = window.innerHeight;
        if (scrollPosition >= pageHeight - windowHeight) {
            navbarLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('.navbar a[href="#contact"]').classList.add('active');
        }
    }
  
    window.addEventListener('load', checkSectionInView);
    window.addEventListener('scroll', checkSectionInView);
  });
  
  
  
  
  // TOGGLE
  
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const sunIcon = document.querySelector('.bxs-sun');
  const moonIcon = document.querySelector('.bxs-moon');
  
  themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
      
      const isDarkMode = body.classList.contains('dark-theme');
      if (isDarkMode) {
          sunIcon.style.display = 'inline-block';
          moonIcon.style.display = 'none';
      } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline-block';
      }
      
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          body.classList.add('dark-theme');
          sunIcon.style.display = 'inline-block';
          moonIcon.style.display = 'none';
      } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'inline-block';
      }
  });
  
  
  
  
  
  // filtro do botão
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillsList = document.querySelector('.skills-list');
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filterValue = button.getAttribute('data-filter');
  
          if (filterValue === 'all') {
              document.querySelectorAll('.skill').forEach(skill => {
                  skill.style.display = 'block';
              });
          } else {
              document.querySelectorAll('.skill').forEach(skill => {
                  skill.style.display = 'none';
              });
              document.querySelectorAll(`.skill[data-category="${filterValue}"]`).forEach(skill => {
                  skill.style.display = 'block';
              });
          }
      });
  });
  
  const filterButton = document.querySelectorAll('.filter-btn');
  
  filterButton.forEach(button => {
      button.addEventListener('click', function() {
          filterButton.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
      });
  });
  
  
  // MODAL
  
  
  document.addEventListener('DOMContentLoaded', function() {
      const buttons = document.querySelectorAll('.show-details-btn');
      const modals = document.querySelectorAll('.modal');
      const closeButton = document.querySelectorAll('.close');
  
      buttons.forEach((button, index) => {
          button.addEventListener('click', () => {
              modals[index].style.display = 'block';
          });
      });
  
      closeButton.forEach((button) => {
          button.addEventListener('click', () => {
              modals.forEach((modal) => {
                  modal.style.display = 'none';
              });
          });
      });
  
      window.addEventListener('click', (event) => {
          modals.forEach((modal) => {
              if (event.target === modal) {
                  modal.style.display = 'none';
              }
          });
      });
  });
  
  
  // FILTRO DO PROJETOS
  
  document.addEventListener("DOMContentLoaded", function() {
      function handleFilterButtonClick(buttonsClass, cardsClass, defaultFilter) {
          const filterButtons = document.querySelectorAll(buttonsClass);
          const cards = document.querySelectorAll(cardsClass);
  
          filterButtons.forEach(button => {
              button.addEventListener("click", function() {
                  const filter = this.getAttribute("data-filter");
  
                  filterButtons.forEach(btn => btn.classList.remove("active"));
                  this.classList.add("active");
  
                  cards.forEach(card => {
                      if (filter === "all" || card.getAttribute("data-category") === filter) {
                          card.style.display = "block";
                      } else {
                          card.style.display = "none";
                      }
                  });
              });
          });
  
          document.querySelector(buttonsClass + `[data-filter='${defaultFilter}']`).click();
      }
  
      handleFilterButtonClick(".portfolio-filter-btn", ".portfolio-content .card", "all");
  
      handleFilterButtonClick(".skills-filter-btn", ".skills-content .skill", "all");
  });
  
  
  
  
  
  // LINGUAGENS
  
  const languageOptions = {
      'pt-br': { text: 'Português (Brasil)', icon: 'image/brasil.png' },
      'en': { text: 'English', icon: 'image/estados-unidos.png' },
      'es': { text: 'Español', icon: 'image/espanha.png' }
  };
  
  
  
  document.querySelectorAll('.dropdown-content a').forEach(item => {
      item.addEventListener('click', function() {
          const selectedId = this.id;
          const selectedLanguage = languageOptions[selectedId];
          
          document.getElementById('current-language').innerHTML = `<img src="${selectedLanguage.icon}" alt="${selectedLanguage.text}" class="flag-icon"> ${selectedLanguage.text}`;
          
          window.location.href = selectedLanguage.href;
      });
  });
  
  
  
  // CARDS
  document.addEventListener('DOMContentLoaded', function () {
      const showMoreButton = document.getElementById('showMoreButton');
      const allCards = document.querySelectorAll('.card');
      const maxCardsToShow = 3;
      
      allCards.forEach((card, index) => {
          if (index >= maxCardsToShow) {
              card.style.display = 'none';
          }
      });
  
      showMoreButton.addEventListener('click', function () {
          let cardsToShow = 0;
          allCards.forEach((card, index) => {
              if (card.style.display === 'none' && cardsToShow < maxCardsToShow) {
                  card.style.display = 'block';
                  cardsToShow++;
              }
          });        
      });
  });
  

  // FORM
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);

    showLoadingModal();

    fetch('https://formsubmit.co/bergkley@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'text/html'
        }
    }).then(response => response.text())
    .then(data => {
        hideLoadingModal();
        showSuccessModal();
        resetForm(); 
    }).catch(error => {
        hideLoadingModal();
        showErrorModal();
        console.error('Erro:', error);
        resetForm(); 
    });
});

function showLoadingModal() {
    const modal = document.getElementById('loadingMessage');
    modal.style.display = 'flex';
}

function hideLoadingModal() {
    const modal = document.getElementById('loadingMessage');
    modal.style.display = 'none';
}

function showSuccessModal() {
    const modal = document.getElementById('successMessage');
    const closeButton = modal.querySelector('.close-button');
    
    modal.style.display = 'flex';
    
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function showErrorModal() {
    const modal = document.getElementById('errorMessage');
    const closeButton = modal.querySelector('.close-button');
    
    modal.style.display = 'flex';
    
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function resetForm() {
    document.getElementById('contactForm').reset();
}

// Função para gerar cor aleatória em formato hexadecimal
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  const loaders = document.querySelectorAll('.loader');
  
  loaders.forEach(loader => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();
  
    loader.style.border = `4px solid ${color1}`;
    loader.style.borderTop = `4px solid ${color2}`;
    loader.style.borderRight = `4px solid ${color3}`;
    loader.style.borderBottom = `4px solid ${color4}`;
  });
  
// #NAV-BAR MOBILE
document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('open');
});
document.getElementById('close-btn').addEventListener('click', function () {
    document.querySelector('.navbar').classList.remove('open');
});
