function openModal(id){
  document.getElementById('modal-'+id).classList.add('active');
  // reset slide index
  document.getElementById('modal-'+id).querySelectorAll('.slide').forEach((slide,i)=>{
    slide.classList.remove('active');
    if(i===0) slide.classList.add('active');
  });
}

function closeModal(id){
  document.getElementById('modal-'+id).classList.remove('active');
}

// Carousel
function nextSlide(modalId){
  const slides = document.getElementById('modal-'+modalId).querySelectorAll('.slide');
  let activeIndex = Array.from(slides).findIndex(s=>s.classList.contains('active'));
  slides[activeIndex].classList.remove('active');
  activeIndex = (activeIndex+1)%slides.length;
  slides[activeIndex].classList.add('active');
}

function prevSlide(modalId){
  const slides = document.getElementById('modal-'+modalId).querySelectorAll('.slide');
  let activeIndex = Array.from(slides).findIndex(s=>s.classList.contains('active'));
  slides[activeIndex].classList.remove('active');
  activeIndex = (activeIndex-1+slides.length)%slides.length;
  slides[activeIndex].classList.add('active');
}
