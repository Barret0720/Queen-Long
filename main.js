import "./assets/scss/all.scss";

import "bootstrap/dist/js/bootstrap.min.js";

// index

const connectIcon = document.querySelector(".connectIcon");
const connectIcons = document.querySelector(".connectIcons");
connectIcon.addEventListener("click", (e) => {
  e.preventDefault();
  connectIcons.classList.toggle("d-block");
  connectIcons.classList.toggle("d-none");
});


AOS.init();

const waveImage = document.querySelector(".bg-wave");
const wave2Image = document.querySelector(".bg-wave2");
const ftWaveImage = document.querySelector(".ft-wave");
const botImage = document.querySelector(".bg-bot");
gsap.to(botImage, {
  y: 66,
  duration: 5,
  ease: "none",
  repeat: -1,
  yoyo: true,
});
gsap.to(waveImage, {
    y: 20,
    duration: 4,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });gsap.from(wave2Image, {
    y: 40,
    duration: 4,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });
  gsap.to(ftWaveImage, {
    y: -12,
    duration: 2,
    ease: "none",
    repeat: -1,
    yoyo: true,
  });
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  gsap.to(waveImage, {
    y: scrollY * -0.5,
    duration: 0.5,
    ease: "power3.out",
    yoyo: true,
  });  gsap.from(wave2Image, {
    y: scrollY * 0.3,
    duration: 0.5,
    ease: "power3.out",
    yoyo: true,
  });
  gsap.to(botImage, {
    y: scrollY * 0.3,
    duration: 1,
    ease: "power3.out",
    yoyo: true,
  });
});

$(function () {
    let $accordion, $wideScreen;
    $accordion = $(".slide-ul").children("li");
    $wideScreen = $(window).width() > 767;
    if ($wideScreen) {
      $accordion.on("click", function (e) {
        var $this;
        $this = $(this);
        if ($this.hasClass("out")) {
          $this.addClass("out");
        } else {
          $this.addClass("out");
          $this.siblings().removeClass("out");
        }
      });
    } else {
      $accordion.on("touchend", function (e) {
        var $this;
        $this = $(this);
        if ($this.hasClass("out")) {
          $this.addClass("out");
        } else {
          $this.addClass("out");
          $this.siblings().removeClass("out");
        }
      });
    }
  });
  let i = 1;
  let divDisplay,
    iCount = 0;

  function countNum(i) {
    if (i < 1) {
      return i + 5;
    } else if (i > 5) {
      return i - 5;
    } else {
      return i;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let divDisplay = document.querySelectorAll(".slide-li");
    setInterval(function () {
      if (i > 5) {
        i = 1;
      }
      for (let oEle of divDisplay) {
        if (oEle.classList.contains("out")) {
          oEle.classList.remove("out");
          break;
        }
      }
      document
        .querySelector('[data-tab="' + countNum(i) + '"]')
        .classList.add("out");
      i++;
    }, 2500);
  });
