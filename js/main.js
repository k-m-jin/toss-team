console.log('hello')

// header
const headerEl = document.querySelector('header');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if (window.scrollY > 1) {
    headerEl.classList.add('dark')
  } else {
    headerEl.classList.remove('dark')
  }
}, 100));

//History
const yearEls = document.querySelectorAll('.years');
const textEls = document.querySelectorAll('.texts')
for (const yearEl of yearEls) {
  yearEl.addEventListener('click', function () {
    const thisYear = this.dataset.year;
    for (const yearElClass of yearEls) {
      //activ 초기화
      yearElClass.classList.remove('active');
    }
    this.classList.add('active');
    console.log(thisYear);
    //history text 
    for (const textEl of textEls) {
      const textYear = textEl.dataset.year;
      if (textYear === thisYear) {
        textEl.style.display = 'block';
      } else {
        textEl.style.display = 'none';
      }
    }
  })
}

//card
const cardEls = document.querySelectorAll('.card');
for (let i = 0; i < cardEls.length; i += 1) {
  cardEls[i].addEventListener('click', function () {
    cardEls[i].classList.toggle('--focus')
  })
}
