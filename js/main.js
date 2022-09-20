const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});

menuLink.forEach((j) => {
   j.addEventListener('click', () => {
      menu.classList.remove('active');
   });
});

const counters = document.querySelectorAll('.skils__scil-value'),
   line = document.querySelectorAll('.skils__scil-color');

counters.forEach((item, i) => {
   line[i].style.width = item.innerHTML;
});

$(document).ready(function () {

   $('form').submit(function (e) {
      e.preventDefault();

      $.ajax({
         type: "POST",
         url: "mailer/smart.php",
         data: $(this).serialize()
      }).done(function () {
         $(this).find("input").val("");
         $('form').trigger('reset');
      });
      return false;
   });
});

