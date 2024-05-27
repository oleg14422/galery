window.onload = () => {
    const firstAccordion = document.querySelectorAll('.accordion');
    const secondAccordion = document.querySelectorAll('.second-section .accordion'); // Додано обробник подій для другого акордеону
    const navigationPanel = document.querySelector('.navigation-panel');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.querySelector('.nav-toggle');

    /*відповідє за офіційне використання сайту)*/
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){
      var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop){
        // прокрутка вниз
        document.getElementById("header").classList.add("header-hidden");
      } else {
        // прокрутка вверх
        document.getElementById("header").classList.remove("header-hidden");
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для Mobile Safari
    }, false);
    

    function accordionFun() {
        if (!this.classList.contains('open')) {
            firstAccordion.forEach((e) => e.classList.remove('open'));
            secondAccordion.forEach((e) => e.classList.remove('open'));
            this.classList.add('open');
        } else {
            firstAccordion.forEach((e) => e.classList.remove('open'));
            secondAccordion.forEach((e) => e.classList.remove('open'));
            this.classList.add('open');
        }
    }

    firstAccordion.forEach((e) => e.addEventListener('click', accordionFun));
    secondAccordion.forEach((e) => e.addEventListener('click', accordionFun)); 
    

    firstAccordion[0].classList.add('open');
    secondAccordion[0].classList.add('open');
    
    function adjustAccordionSizes() {
        const panelWidth = parseInt(window.getComputedStyle(navigationPanel).width);
        firstAccordion.forEach((item) => {
            item.style.width = `calc(100% - ${panelWidth}px)`;
        });
        secondAccordion.forEach((item) => {
            item.style.width = `calc(100% - ${panelWidth}px)`;
        });
    }
   
    window.addEventListener('resize', adjustAccordionSizes);

    
    function toggleNav() {
        var overlay = document.getElementById("overlay");
        if (overlay.style.visibility === "visible") {
            overlay.style.visibility = "hidden";
        } else {
            overlay.style.visibility = "visible";
        }
    }
    

    // Додавання обробника подій на кнопку меню
    menuBtn.addEventListener('click', toggleNav);

    // Додавання обробника подій на кнопки пунктів меню
    const menuItems = document.querySelectorAll('.menu-btn');
    menuItems.forEach(item => {
        item.addEventListener('click', toggleNav); // Змінено з closeNav на toggleNav
    });

    // Додавання обробника подій на кнопку "Rare flowers"
    const rareFlowersBtn = document.querySelector('.menu-btn:nth-of-type(1)');
    rareFlowersBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.accordion:nth-of-type(1)').offsetTop,
            behavior: 'smooth'
        });
    });

    // Додавання обробника подій на кнопку "Rare animals"
    const rareAnimalsBtn = document.querySelector('.menu-btn:nth-of-type(2)');
    rareAnimalsBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.second-section').offsetTop,
            behavior: 'smooth'
        });
    });
   
    const aboutAuthorBtn = document.querySelector('.menu-btn:nth-of-type(3)');
    // Додамо обробник подій на кнопку "About author"
    aboutAuthorBtn.addEventListener('click', () => {
    window.scrollTo({
        top: document.getElementById('about-author').offsetTop,
        behavior: 'smooth'
        });
    });

};
