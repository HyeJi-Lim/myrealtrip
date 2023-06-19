//모달창이 누르면 열리고 닫히는 기능을 구현
//모달창
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const closeBtn = document.querySelector('#closeBtn');

btnOpenPopup.addEventListener('click', () => {
  modal.style.display = 'block';
    // 모달 on
    body.style.overflow = 'hidden';

    // 모달 off
    body.style.overflow = 'auto';
});

closeBtn.addEventListener("click", e => {
  modal.style.display = "none"
});

const modal2 = document.querySelector('.modal2');
const btnOpenPopup2 = document.querySelector('.btn-open-popup2');
const closeBtn2 = document.querySelector('#closeBtn2');

btnOpenPopup2.addEventListener('click', () => {
  modal2.style.display = 'block';
    // 모달 on
    body.style.overflow = 'hidden';

    // 모달 off
    body.style.overflow = 'auto';
});

closeBtn2.addEventListener("click", e => {
  modal2.style.display = "none"
});


//콘텐츠가 자동적으로 움직이고 무한재생되는 것을 구현
//콘텐츠1
var swiper = new Swiper(".mySwiper", {
  speed: 1500, //1.5초의 속도로
  spaceBetween: 20, //간격
  centeredSlides: true, //가운데 정렬
  slidesPerView: 5,  //보이는 콘텐츠 수
  slidesPerGroup: 5,
  loop: true, //무한
  loopAdditionalSlides: 1,
  loopedSlides: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  }, //자동재생
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: 'slide'
});

//자동재생하는 것을 멈추고 다시 실행시키는 버튼을 구현
var autoplayButton = document.getElementById("toggleAutoplay");
var isAutoplayActive = true;

autoplayButton.addEventListener("click", function() {
  if (isAutoplayActive) {
    swiper.autoplay.stop();
    autoplayButton.innerHTML = '<img src="https://i.postimg.cc/cJSmnr3F/stop.png" alt="Stop">';
  } else {
    swiper.autoplay.start();
    autoplayButton.innerHTML = '<img src="https://i.postimg.cc/DwjvWbRT/start.png" alt="Start">';
  }
  
  isAutoplayActive = !isAutoplayActive;
});


//select가 바뀌는 것에 따라 콘텐츠 내용과 이미지가 바뀌도록 구현
const typeInput1 = document.querySelector("select[name = 'type1']");
const typeInput2 = document.querySelector("select[name = 'type2']");
const typeInput3 = document.querySelector("select[name = 'type3']");

const ImgTag1 = document.querySelector(".card-img1 img");
const ImgTag2 = document.querySelector(".card-img2 img");
const ImgTag3 = document.querySelector(".card-img3 img");

const comTitle1 = document.querySelector(".com-title1");
const comTitle2 = document.querySelector(".com-title2");
const comTitle3 = document.querySelector(".com-title3");

const smallTag1 = document.querySelector(".tag1");
const smallTag2 = document.querySelector(".tag2");
const smallTag3 = document.querySelector(".tag3");

const priceTag1 = document.querySelector(".price1 b");
const priceTag2 = document.querySelector(".price2 b");
const priceTag3 = document.querySelector(".price3 b");

typeInput1.addEventListener, typeInput2.addEventListener, typeInput3.addEventListener("change", function(){
  ImgTag1.src = "https://cdn.pixabay.com/photo/2016/03/11/02/20/oxygen-cylinder-1249621_1280.jpg";
  ImgTag2.src = "https://cdn.pixabay.com/photo/2019/12/03/13/25/lantern-4670043_1280.jpg";
  ImgTag3.src = "https://cdn.pixabay.com/photo/2017/07/11/18/07/market-2494520_1280.jpg";

  comTitle1.innerHTML = "베트남 #푸 코옥";
  comTitle2.innerHTML = "태국 #등불축제";
  comTitle3.innerHTML = "베트남 #호이 한";

  smallTag1.innerHTML = "#스노클링#바다탐험#액티비티";
  smallTag2.innerHTML = "#등불축제#추억여행#액티비티";
  smallTag3.innerHTML = "#야시장#램프#관광";

  priceTag1.innerHTML = "987,000";
  priceTag2.innerHTML = "684,000";
  priceTag3.innerHTML = "547,000";
})

//스크롤하면 재생되고 있는 이미지가 더 빠르게 움직이도록 구현
//콘텐츠4
const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')

const textArr1 = [
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' }
];

const textArr2 = [
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' },
  { text: 'With', image: 'logo.png' }
];

let count1 = 0
let count2 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)

function initTexts(element, textArray) {
  for (let i = 0; i < textArray.length; i++) {
    const { text, image } = textArray[i];
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = text;
    element.appendChild(imgElement);
    element.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0'));
    element.appendChild(document.createTextNode(text));
  }
}

function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++
  count2++

  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, 1)

  window.requestAnimationFrame(animate)
}

function scrollHandler() {
  count1 += 15
  count2 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()


//스크롤시, 글씨가 생기도록 구현
//화면 안에 콘텐츠가 들어오면 불투명도가 0에서 1로 천천히 바뀜
let observer = new IntersectionObserver((e)=>{
  e.forEach((T)=>{
      if(T.isIntersecting){
          T.target.style.opacity = 1;
      }else{
          T.target.style.opacity = 0;
      }
  })
})

const title = document.querySelectorAll('h2');
observer.observe(title[0])
const subText = document.querySelectorAll(".con1-sub");
observer.observe(subText[0])
const heroText = document.querySelectorAll(".hero-text-warp");
observer.observe(heroText[0])
const VideoText = document.querySelectorAll(".videotxt");
observer.observe(VideoText[0])