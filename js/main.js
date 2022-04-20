console.log('hello')

// 해더 필더
const headerEl = document.querySelector('header');
console.log(headerEl)
window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY>10){
    headerEl.classList.add('.--dark')
  }else{
    headerEl.classList.remove('.--dark')
  }
},1000));

