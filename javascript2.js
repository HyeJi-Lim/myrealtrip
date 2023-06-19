//히어로 이미지가 자동으로 재생되어서 넘어가도록 하기 위해 구현
//3초마다 재생되도록 함
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

//숫자가 100에서부터 400까지 올라가도록 구현
//   콘텐츠1
const counter = ($counter, max) => {
    let now = max;
  
    const handle = setInterval(() => {
        const countValue = Math.ceil(max - now);
        $counter.innerHTML = `최대 ${countValue}만원`;
    
      // 목표수치에 도달하면 정지
      if (now < 1) {
        clearInterval(handle);
      }
      
      // 증가되는 값이 계속하여 작아짐
      const step = now / 30;
      
      // 값을 적용시키면서 다음 차례에 영향을 끼침
      now -= step;
    }, 50);
  }
  
  window.onload = () => {
    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".count");
    
    // 목표 수치
    const max = 400;
    
    setTimeout(() => counter($counter, max), 2000);
  }

//input값이 달라지면 이미지가 바뀌도록 구현함
// input
const outImg1 = document.querySelector(".tranding-slide-img img");
const outImg2 = document.querySelector(".tranding-slide-img2 img");
const outImg3 = document.querySelector(".tranding-slide-img3 img");
const outImg4 = document.querySelector(".tranding-slide-img4 img");
const outImg5 = document.querySelector(".tranding-slide-img5 img");
const outImg6 = document.querySelector(".tranding-slide-img6 img");

const TripTag1 = document.querySelector(".trip-name");

const priceInput = document.querySelector("input[name='price']");
const pirceLabel = document.querySelector("span.price-label");

priceInput.addEventListener("input", function(){
    
    pirceLabel.innerHTML = `${this.value}00만원`;
    outImg1.src = `${this.value}a.JPG`;;
    outImg2.src = `${this.value}b.JPG`;;
    outImg3.src = `${this.value}c.JPG`;;
    outImg4.src = `${this.value}d.JPG`;;
    outImg5.src = `${this.value}e.JPG`;;
    outImg6.src = `${this.value}f.JPG`;;
})

document.querySelector('.rangeInput').addEventListener('input',function(event){
  	var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background = 'linear-gradient(to right, #FFE283 0%, #FFE283 '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
});

//콘텐츠들이 입체적으로 넘어갈 수 있도록 구현함
// 슬라이더
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

//콘텐츠가 화면에 나타나면 불투명도가 0에서 1로 바뀜
// 콘텐츠2
let observer = new IntersectionObserver((e)=>{
  e.forEach((T)=>{
      if(T.isIntersecting){
          T.target.style.opacity = 1;
      }else{
          T.target.style.opacity = 0;
      }
  })
})

const title = document.querySelectorAll("h1");
observer.observe(title[0]);
const title2 = document.querySelectorAll("h6");
observer.observe(title2[0]);
const title3 = document.querySelectorAll("h4");
observer.observe(title3[0]);
const subtitle = document.querySelectorAll(".subtxt");
observer.observe(subtitle[0]);