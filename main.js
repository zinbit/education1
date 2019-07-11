/* -------- обучение -------- */
var table = {
  color: 'black',
  size: {
    width: 200,
    height: 100
  },
  getColor: function () {
    console.log('black');
  }
};

function pow(a) {
  // возводим в степень и возвращаем результат
  return Math.pow(a, 2);
}

function hipitinuse(a, b) {
  return Math.sqrt(pow(a) + pow(b));
}

var c = hipitinuse(5, 7);
var d = hipitinuse(7, 72);


/* -------- слайдер -------- */
var slides = document.getElementsByClassName('slide');
console.log(slides[0]);
slides[0].classList.add('active');

var name = ('Максим');
function func() {
   // console.log (name)
}
setTimeout(func, 2000);


var i = (0);
function func() {
   // console.log ((i) + 1)
}
setInterval (func, 2000);


var i = (0);
var timerId = setInterval(function() {
    // console.log ( i = i + 1 );
     }, 1000);

     var activeSlide = 0;
     var prevActiveSlide = 0;
     
     function showName() {
       slides[prevActiveSlide].classList.remove('active');
       slides[activeSlide].classList.add('active');
     
       prevActiveSlide = activeSlide;
       activeSlide = activeSlide + 1;
     
       if (activeSlide === slides.length) {
         activeSlide = 0;
       }
     };
     
     showName();
     
     setInterval(showName, 2000);