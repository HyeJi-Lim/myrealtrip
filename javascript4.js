//section의 위치가 일정부분에 도달하면 middle이라고 지정된 스타일로 변화되도록 구현
//timeline이 좀 더 인터랙티브하게 보이도록 함
const sectionTags = document.querySelectorAll("section");

document.addEventListener("scroll", function(){

    sectionTags.forEach(section =>{
        let sectionTop = section.getBoundingClientRect().top;
        let sectionMid = sectionTop + section.getBoundingClientRect().height/2;
        let windowMid = window.innerHeight/2;

        if(Math.abs(windowMid - sectionMid) < 100){
            section.classList.add("middle")
        }else{
            section.classList.remove("middle")

        }
    })
})

//콘텐츠가 화면에 위치하면 불투명도가 0에서 1로 바뀌어서 나타남
let observer = new IntersectionObserver((e)=>{
    e.forEach((T)=>{
        if(T.isIntersecting){
            T.target.style.opacity = 1;
        }else{
            T.target.style.opacity = 0;
        }
    })
  })
  
const title = document.querySelectorAll('h1');
observer.observe(title[0])
const subTitle = document.querySelectorAll(".sub");
observer.observe(subTitle[0])
const heroTag = document.querySelectorAll(".hero-text-warp");
observer.observe(heroTag[0])
const title2 = document.querySelectorAll('h4');
observer.observe(title2[0])