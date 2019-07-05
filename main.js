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
