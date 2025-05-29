let myBody = document.body
//**Modal login */ 
let btnLogin = document.querySelector('.modalLogin')
let divLogin = document.querySelector('.loginModal')
let opacity = document.querySelector('.modalOpacity');
let closeBtn = document.querySelector('.closeModal');
let loginBtn = document.querySelector('.login')
btnLogin.addEventListener('click', ()=>{
    divLogin.style.display ='flex'
    opacity.style.display = 'block';

 
})

closeBtn.addEventListener('click', () => {
  divLogin.style.display = 'none';
  opacity.style.display = 'none';
});
loginBtn.addEventListener('click',()=>{
    divLogin.style.display = 'none';
    opacity.style.display = 'none';
})
opacity.addEventListener('click', () => {
  divLogin.style.display = 'none';
  opacity.style.display = 'none';
});

//**Video of navbar */ 
// // let carouselContainer = document.querySelector('.carousel-container')
// let carouselParent = document.querySelectorAll('.carousel')
// let watchBtn = document.querySelectorAll(".videoBtn");
// let videoModal = document.querySelectorAll(".videoCarousel");
// let videoFrame = document.querySelector("#videoFrame");
// let closeBtnVideo = document.querySelectorAll(".close-btn");
// let bgOpacity = document.querySelectorAll(".bgOpacity");
// let nav = document.querySelector('nav')

// // Hna t7ot link dyal vidéo dyalek men YouTube, ghyr "YOUR_VIDEO_ID" b lID dyal vidéo
// let iframeVideo = document.querySelectorAll('.iframe')
// let videoURL = iframeVideo.src


// watchBtn.addEventListener("click", () => {
//     nav.style.zIndex='999'
//     carouselContainer.style.display='block'
//     carouselParent.style.display='block'
//   videoModal.style.display = "block";
//   videoFrame.src = `${videoURL}?autoplay=1`;
// });


// function closeModal() {
//   videoModal.style.display = "none";
//   videoFrame.src = ""; // Bach yb9a ma ytsma3ch l vidéo mlli tsdd lmodal
// }

// closeBtnVideo.addEventListener("click", closeModal);
// bgOpacity.addEventListener("click", closeModal);

// //**Carousel 1 */

// let videoAbout = document.querySelectorAll('.positionAbs')
// let nextBtns = document.querySelectorAll('.next')
// let prevBtns = document.querySelectorAll('.prev')
// // JavaScript dyal carousel li fih tsawer w videos

// let carouselContainer = document.getElementById("carousel1");
// let slides = carouselContainer.querySelectorAll(".slide");
// let nextBtn = carouselContainer.querySelectorAll(".next");
// let prevBtn = carouselContainer.querySelectorAll(".prev");

// let currentSlide = 0;

// function showSlide(index) {
//   // Cache: Reset all slides
//   slides.forEach((slide, i) => {
//     slide.style.display = i === index ? "block" : "none";

//     // Ila f iframe, wa9f vidéo
//     let iframe = slide.querySelectorAll("iframe");
//     if (iframe) {
//       if (i !== index) iframe.src = iframe.src; // reset video src to stop
//     }
//   });

//   currentSlide = index;
// }

// function nextSlide() {
//   let next = currentSlide + 1;
//   if (next >= slides.length) next = 0;
//   showSlide(next);
// }

// function prevSlide() {
//   let prev = currentSlide - 1;
//   if (prev < 0) prev = slides.length - 1;
//   showSlide(prev);
// }

// nextBtn.addEventListener("click", nextSlide);
// prevBtn.addEventListener("click", prevSlide);

// // Show the first slide initially
// showSlide(currentSlide);

// // Optional: button to show carousel (ex: from navbar btn)
// let openCarouselBtn = document.getElementById("openCarouselBtn");
// if (openCarouselBtn) {
//   openCarouselBtn.addEventListener("click", () => {
//     carouselContainer.style.display = "block";
//     showSlide(0);
//   });
// }

// // Optional: close btn for each video slide
// let closeBtns = carouselContainer.querySelectorAll(".close-btn");
// closeBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     carouselContainer.style.display = "none";
//     let iframe = btn.closest(".videoCarousel").querySelector("iframe");
//     if (iframe) iframe.src = ""; // stop video
//   });
// });




let nav = document.querySelector("nav");
let watchBtns = document.querySelectorAll(".videoBtn");
let carouselContainers = document.querySelectorAll(".carousel-container");
let carousels = document.querySelectorAll(".carouselHero");
let iframes = document.querySelectorAll(".iframe");
let videoModals = document.querySelectorAll(".videoCarousel");
let bgOpacities = document.querySelectorAll(".bgOpacity");
let closeBtns = document.querySelectorAll(".close-btn");

// // Boucle sur chaque bouton vidéo
// watchBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     nav.style.zIndex = "999";

//     carouselContainers[index].style.display = "block";
//     carousels[index].style.display = "block";
//     videoModals[index].style.display = "block";
//     bgOpacities[index].style.display = "block";

//     // autoplay video
    
//     let originalSrc = iframes[index].getAttribute("src").split("?")[0];
//     iframes[index].setAttribute("src", `${originalSrc}?autoplay=1`);
//   });
// });

// // Close modal function
// function closeVideoModal(index) {
//   carouselContainers[index].style.display = "none";
//   videoModals[index].style.display = "none";
//   bgOpacities[index].style.display = "none";
//   iframes[index].setAttribute("src", ""); // stop video
// }

// // Close button
// closeBtns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     closeVideoModal(index);
//   });
// });

// // Close by clicking opacity
// bgOpacities.forEach((bg, index) => {
//   bg.addEventListener("click", () => {
//     closeVideoModal(index);
//   });
// });


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

  // ✅ Listener li kay7ell carousel
//   let carouselId = carousel.id;
//   let openButtons = document.querySelectorAll(`[data-open="${carouselId}"]`);
 watchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      carousel.style.display = 'block';
      showSlide(0);
    });
  });
});
