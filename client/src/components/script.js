// slider
const slide = document.querySelectorAll('.slide');
let maxslide = slide.length;
let currslide = 0;
slide.forEach(function (s, i) {
    s.style.transform = `translatex(${100 * i}%)`;
})
const rightbtn = document.querySelector('.slider__btn--right');
const leftbtn = document.querySelector('.slider__btn--left');

rightbtn.addEventListener("click", function () {
    if (currslide === maxslide - 1) {
        currslide = 0;
    } else {
        currslide++;
    }
    slide.forEach(function (s, i) {
        s.style.transform = `translateX(${100 * (i - currslide)}%)`;
    });

});
leftbtn.addEventListener('click', function () {
    if (currslide === 0) {
        currslide = maxslide - 1;
    } else {
        currslide--;
    }
    slide.forEach(function (s, i) {
        s.style.transform = `translateX(${100 * (i - currslide)}%)`;
    });

});
console.log("hi this is subahs")