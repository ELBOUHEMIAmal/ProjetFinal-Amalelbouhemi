let myBody = document.body
//**Modal login */ 
let btnLogin = document.querySelector('.modalLogin')
let divLogin = document.querySelector('.loginModal')
let opacity = document.querySelector('.modalOpacity');
let closeBtn = document.querySelector('.closeModal');
let loginBtn = document.querySelector('.login')
btnLogin.addEventListener('click', () => {
    divLogin.style.display = 'flex'
    opacity.style.display = 'block';


})

closeBtn.addEventListener('click', () => {
    divLogin.style.display = 'none';
    opacity.style.display = 'none';
});
loginBtn.addEventListener('click', () => {
    divLogin.style.display = 'none';
    opacity.style.display = 'none';
})
opacity.addEventListener('click', () => {
    divLogin.style.display = 'none';
    opacity.style.display = 'none';
});

//**Video of navbar and carousels*/ 






let nav = document.querySelector("nav");
let watchBtns = document.querySelectorAll(".videoBtn");
let carouselContainers = document.querySelectorAll(".carousel-container");
let carousels = document.querySelectorAll(".carouselHero");
let iframes = document.querySelectorAll(".iframe");
let videoModals = document.querySelectorAll(".videoCarousel");
let bgOpacities = document.querySelectorAll(".bgOpacity");
let closeBtns = document.querySelectorAll(".close-btn");



carouselContainers.forEach(carousel => {
    let slides = carousel.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'flex' : 'none';
            let iframe = slide.querySelectorAll('iframe');
            if (iframe && i !== index) iframe.src = iframe.src; // stop video
        });
        currentSlide = index;
    }

    carousel.querySelector('.next').addEventListener('click', () => {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    });

    carousel.querySelector('.prev').addEventListener('click', () => {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    });

    carousel.querySelectorAll('.close-btn, .bgOpacity').forEach(btn => {
        btn.addEventListener('click', () => {
            carousel.style.display = 'none';
            let iframe = carousel.querySelector('iframe');
            if (iframe) iframe.src = ''; // stop video
        });
    });


    watchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            carousel.style.display = 'block';
            showSlide(0);
        });
    });
});


//**menu  */ 

let plats = document.querySelector('.plats')
let listOfPlats = document.querySelectorAll('.listesOfDay>li')
let platList = document.querySelectorAll('.plat-list>div')
// console.log(platList);

// console.log(listOfPlats);

listOfPlats.forEach(list => {
    list.addEventListener('click', () => {
        let listCategories = list.getAttribute('data-category')
        platList.forEach(plat => {
            let platCategories = plat.getAttribute('data-category')
            if (platCategories === listCategories) {
                plat.classList.remove('hide')
                  plat.classList.add("show");
                plat.style.transition ='0.5s ease, transform 0.5s ease;'
            }else{
                plat.classList.remove("show");
                plat.classList.add('hide')
                plat.style.transition ='0.5s ease, transform 0.5s ease;'
            }
        })
        
    })
})


//**carousel testimonial */ 

let carouselTest = document.querySelector('.carouselTest');
let carouselsParent = document.querySelector('.carousels');
  let comments = document.querySelectorAll('.comments');
  console.log(comments);
  
  let totalItems = comments.length;
  let itemsPerSlide = 3;
  let index = 0;

  function moveCarousel() {
    index++;
    if (index > totalItems - itemsPerSlide) {
      index = 0;
    }
    let slideWidth = comments[0].offsetWidth;
    carouselsParent.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  setInterval(moveCarousel, 3000);

  const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.styleRepeat');
const total = items.length;
const visibleItems = 3;
let currentIndex = 0;

function showItems() {
  const itemWidth = items[0].offsetWidth + 20; 
  const moveX = itemWidth * currentIndex;
  
  carousel.style.transform = `translateX(-${moveX}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > total - visibleItems) {
    currentIndex = 0;
  }
  showItems();
}

setInterval(nextSlide, 3000);
let carouselreapet = document.querySelectorAll('.carousel-reapet')
const slider = (index, myBtn ) => {

    
    //* get the attribute of myBtn
    let target = myBtn.getAttribute('carouselBtn')
    carouselreapet.forEach(carousel => {
       
        //* find the carousel to slide
        if(carousel.id === target){

            
            
          let slides = carousel.querySelectorAll('.slide')
          let camera = carousel.querySelector('.carouselG')
          console.log(camera);

          if(index >= slides.length){
            index = 0
          }else if(index < 0){
            index = slides.length  - 1
          }
            
          camera.style.transform = `translateX(-${slides[0].clientWidth * index}px)`
          currentIndex = index
        }

    })
    

}

