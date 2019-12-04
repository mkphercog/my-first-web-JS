// działająca strona w jQuery
// $('.activeNav').on('click', function () {
//  $('.fa-times-circle').toggleClass('active');
//  $('.fa-arrow-circle-right').toggleClass('active');
//  $('.welcome__nav').toggleClass('active');
// })


// Animacje scrolowania do danego miejsca w jQUERY!! o wiele prościej i ładniej
$('a').on('click', function () {
 const whatIClick = $(this).text();
 const posAboutMe = $('.about').offset().top;
 const posPortfolio = $('.portfolio').offset().top;
 const posHobby = $('.hobby').offset().top;
 const posContact = $('.contact').offset().top;

 if (whatIClick === 'O mnie') {
  $('html, body').animate({
   scrollTop: posAboutMe - 50
  }, 1000)
 }

 if (whatIClick === 'Portfolio') {
  $('html, body').animate({
   scrollTop: posPortfolio - 50
  }, 1000)
 }

 if (whatIClick === 'Hobby') {
  $('html, body').animate({
   scrollTop: posHobby - 50
  }, 1000)
 }

 if (whatIClick === 'Kontakt') {
  $('html, body').animate({
   scrollTop: posContact - 50
  }, 1000)
 }
})

$(document).on('scroll', function () {
 const posPortfolio = $('.portfolio').offset().top;
 const activeScroll = $(document).scrollTop();

 if (activeScroll > posPortfolio) {
  $('.backUpPage').addClass('active');
 } else {
  $('.backUpPage').removeClass('active');
 }
})

$('.backUpPage').on('click', function () {
 $('html, body').animate({
  scrollTop: 0
 }, 2000)
})




// czysty JS hamburger menu w mobile
const activeNav = document.querySelector('.activeNav');
const faTimes = document.querySelector('.fa-times-circle');
const faArrow = document.querySelector('.fa-arrow-circle-right');
const welcomeNav = document.querySelector('.welcome__nav');

activeNav.addEventListener('click', function () {
 faTimes.classList.toggle('active');
 faArrow.classList.toggle('active');
 welcomeNav.classList.toggle('active');
})


// Próby zrobienia animacji scrollowania do danej sekcji niestety przechodzi dziwnie w górę resetując pozycję startową na top: 0 i dopiero po drugim kliknięciu zjeżdza tam gdzie powinno współgra z dodatkiem w CSS  scroll-behavior: smooth; przewija się dobrze i powoli nie odrazu... 

// const clickedAElement = document.querySelectorAll('a');

// clickedAElement[0].addEventListener('click', function () {
//  const posAboutMe = document.querySelector('.about').offsetTop;
//  window.scrollTo(0, posAboutMe);
// })

// clickedAElement[1].addEventListener('click', function () {
//  const posPortfolio = document.querySelector('.portfolio').offsetTop;
//  window.scrollTo(0, posPortfolio);
// })

// clickedAElement[2].addEventListener('click', function () {
//  const posHobby = document.querySelector('.hobby').offsetTop;
//  window.scrollTo(0, posHobby);
// })

// clickedAElement[3].addEventListener('click', function () {
//  const posContact = document.querySelector('.contact').offsetTop;
//  window.scrollTo(0, posContact);
// })

// const backUpPage = document.querySelector('.backUpPage');

// window.addEventListener('scroll', function () {
//  const activePosition = window.scrollY;
//  const posPortfolio = document.querySelector('.portfolio').offsetTop;
//  if (activePosition > posPortfolio) {
//   backUpPage.classList.add('active');
//  } else {
//   backUpPage.classList.remove('active');
//  }
// })

// backUpPage.addEventListener('click', function () {
//  window.scrollTo(0, 0);
// })