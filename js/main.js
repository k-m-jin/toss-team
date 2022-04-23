console.log('hello')

// 해더 필더
const headerEl = document.querySelector('header');

window.addEventListener('scroll',_.throttle(function(){
  if(window.scrollY>10){
    headerEl.classList.add('dark')
  // }else if(window.scrollY>500){
  //   headerEl.classList.remove('dark')
  //    headerEl.classList.add('white')
    
  }else{
    headerEl.classList.remove('dark')
  }
},100));

// const ulEl = document.querySelector('.history')

// for (let i =0; i<9; i +=1 ){
//   const liEl = document.createElement('li')
//   liEl.textContent = i
//   ulEl.appendChild(liEl)
// }

const yearsEl = document.querySelectorAll('.years');
const textsEl = document.querySelectorAll('.texts')
for (const yearEl of yearsEl){
  yearEl.addEventListener('click',function(){
    const thisYear = this.dataset.year;
    for (const yearElClass of yearsEl){
      //activ 초기화
      yearElClass.classList.remove('active');
    }
    
    this.classList.add('active');
    console.log(thisYear);
    for(const textEl of textsEl){
      const textYear = textEl.dataset.year;
      if(textYear === thisYear){
        textEl.style.display = 'block';
      }else{
        textEl.style.display = 'none';
      }
    }
  })
}




// document.querySelector(".submitBtn").addEventListener("click", function(){
//   var 사용자가입력한값 = document.querySelector(".target").value;
//   if(!사용자가입력한값.trim()){
//        alert("공백 입력 ㄴㄴ")
//   } else {
//        console.log(사용자가입력한값)
//   }
// })