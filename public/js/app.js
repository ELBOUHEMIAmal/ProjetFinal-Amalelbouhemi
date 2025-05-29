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

let watchBtn = document.querySelector(".videoBtn");
let videoModal = document.querySelector(".videoCarousel");
let videoFrame = document.querySelector("#videoFrame");
let closeBtnVideo = document.querySelector(".close-btn");
let bgOpacity = document.querySelector(".bgOpacity");

// Hna t7ot link dyal vidéo dyalek men YouTube, ghyr "YOUR_VIDEO_ID" b lID dyal vidéo
let videoURL = "https://www.youtube.com/embed/Y7f98aduVJ8";

watchBtn.addEventListener("click", () => {
  videoModal.style.display = "block";
  videoFrame.src = `${videoURL}?autoplay=1`;
});

function closeModal() {
  videoModal.style.display = "none";
  videoFrame.src = ""; // Bach yb9a ma ytsma3ch l vidéo mlli tsdd lmodal
}

closeBtnVideo.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
