import '../CSS/Home.css'

import '../assets/table1.jpg'
import '../assets/table2.jpg'
import '../assets/table3.jpg'
import '../assets/table4.jpg'
import '../assets/cart.png'


// slide show

function makeSlideShow(slidesId) {
  const slides = document.getElementById(slidesId);
  const slidesInner = slides.querySelector('.slides-inner');
  const images = slidesInner.querySelectorAll('img');

  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  if (nextBtn !== null) {
    nextBtn.addEventListener('click', function (e) {
      e.preventDefault();

      // setInterval(nextSlide, delay)
      nextSlide();
    });
  }

  if (prevBtn !== null) {
    prevBtn.addEventListener('click', function (e) {
      e.preventDefault();

      // setInterval(nextSlide, delay)
      prevSlide();
    });
  }

  const delay = parseInt(slides.dataset.delays);
  const transition = parseInt(slides.dataset.transition);
  slidesInner.style.transition = `${transition}ms`;
  const slideWidth = slides.clientWidth;

  let index = 0;

  let interval = setInterval(nextSlide, delay);
  clearInterval(interval);

  function nextSlide() {
    index += 1;
    if (index === images.length) {
      index = 0;
    }
    showSLide();
  }

  function prevSlide() {
    index -= 1;
    if (index < 0) {
      index = images.length - 1;
    }
    showSLide();
  }

  function showSLide() {
    slidesInner.style.transform = `translate3d(${index * -slideWidth}px, 0, 0)`;
  }
}

// next and previous Buttons

makeSlideShow('slides');

// Add to Cart --------------------------------------------------

let cart = document.querySelectorAll('.add-cart-btn');
let CartNum = document.querySelector('.cart-number');

let products = [
  {
    name: 'product',
    tag: 'light',
    price: 150,
    inCart: 0,
  },
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener('click', () => {
    cartNumbers();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart-number').textContent = productNumbers;
    CartNum.style.color = 'red';
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-number').textContent = productNumbers + 1;
    CartNum.style.color = 'red';
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-number').textContent = 1;
    CartNum.style.color = 'red';
  }
}
onLoadCartNumbers();

// show product function --------------------------
var a;
let containerShow = document.querySelector('.active');
containerShow.addEventListener('click', () => {
  showAllContent();
});

function showAllContent() {
  if (a == 1) {
    let allCatogries = document.querySelectorAll('.all');
    allCatogries.forEach((filters) => {
      filters.style.display = 'flex';
      return a=0;
    });
  } else{
    let allCatogries = document.querySelectorAll('.all');
    allCatogries.forEach((filters) => {
      filters.style.display = 'none';
      return a=1;
    });
  }
}

let tablesShow = document.querySelector('.table-btn');
tablesShow.addEventListener('click', () =>{ 
  showContent()
})
let b;
function showContent(){
  if(b == 1){
    tableCatogrie = document.querySelector('.tables');
    tableCatogrie.style.display = 'flex';
    return b = 0;
  } else{
    tableCatogrie = document.querySelector('.tables');
    tableCatogrie.style.display = 'none';
    return b = 1;
  }
}

let macrameShow = document.querySelector('.macrame-btn');
macrameShow.addEventListener('click', () =>{
  showMacContent()
})
let c;
function showMacContent(){
  if(c == 1){
    tableCatogrie = document.querySelector('.macrame');
    tableCatogrie.style.display = 'flex';
    return c = 0;
  } else{
    tableCatogrie = document.querySelector('.macrame');
    tableCatogrie.style.display = 'none';
    return c = 1;
  }
}




// Go back to top

let goToTopBtn = document.getElementById('top-btn');

goToTopBtn.onclick = function () {
  window.scrollTo(0, 0);
};
// console.log(goToTopBtn)

// import '../CSS/about.css'
// import '../CSS/contact.css'

// import './collection'

