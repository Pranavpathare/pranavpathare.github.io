/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2000,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle");
sr.reveal(".skills__data");

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__mailicon", { interval: 200 });

sr.reveal(".codingprofiles__icon");

sr.reveal(".footer__icon");

sr.reveal(".achievements__container");

sr.reveal(".contact__details");

sr.reveal(".workex__comp");

sr.reveal(".edu__container");

sr.reveal(".resume_icon");

$(document).ready(function () {
  var navHeight = $("#nav").height();
  var windowH = $(window).height();

  $(document).scroll(function () {
    var st = $(this).scrollTop();

    $(".section").each(function (index, element) {
      if (
        st + navHeight > $(this).offset().top &&
        st + navHeight <= $(this).offset().top + $(this).height()
      ) {
        var id = $(this).attr("id");
        $('a[href="#' + id + '"]').addClass("active");
        // or $('#nav li:eq('+index+')').addClass('active');
      } else {
        var id = $(this).attr("id");
        $('a[href="#' + id + '"]').removeClass("active");
        //or $('#nav li:eq('+index+')').removeClass('active');
      }
      console.log(id);
    });
  });
});
