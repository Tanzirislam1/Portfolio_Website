/* locomotive */

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

/* cursor */

let cursor = document.querySelector("#mouse-circle"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mouseX = 0,
  mouseY = 0;

// let heroTitle = document.querySelector("#hero-left h2");

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener("mousemove", function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if(link.classList.contains('small')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-small');
    }
  });
});

// window.addEventListener("mousemove", function (dets) {
//   gsap.to(circle, {
//     x: dets.clientX,
//     y: dets.clientY,
//     duration: 0.5,
//     ease: Expo,
//   });
// });

// heroTitle.addEventListener("mousemove", function (dets) {
//   gsap.to(circle, {
//     scale: 8,
//   });

//   /*   gsap.to("#hero-left h2", {
//     color: "#fff",
//     duration: .4
//   }) */
// });

// heroTitle.addEventListener("mouseleave", function (dets) {
//   gsap.to(circle, {
//     scale: 1,
//   });

//   /*   gsap.to("#hero-left h2", {
//     color: "#000",
//     duration: 0.4,
//   }) */
// });

/**
 * Magnetic Buttons
 *//* 
function initMagneticButtons() {
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll(".magnetic");
  var strength = 100;

  // START : If screen is bigger as 540 px do magnetic
  if (window.innerWidth > 540) {
    // Mouse Reset
    magnets.forEach((magnet) => {
      magnet.addEventListener("mousemove", moveMagnet);
      $(this.parentNode).removeClass("not-active");
      magnet.addEventListener("mouseleave", function (event) {
        gsap.to(event.currentTarget, 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
        gsap.to($(this).find(".btn-text"), 1.5, {
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
        });
      });
    });

    // Mouse move
    function moveMagnet(event) {
      var magnetButton = event.currentTarget;
      var bounding = magnetButton.getBoundingClientRect();
      var magnetsStrength = magnetButton.getAttribute("data-strength");
      var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");

      gsap.to(magnetButton, 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrength,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
      gsap.to($(this).find(".btn-text"), 1.5, {
        x:
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          magnetsStrengthText,
        y:
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut,
      });
    }
  } // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  $(".btn-click.magnetic").on("mouseenter", function () {
    if ($(this).find(".btn-fill").length) {
      gsap.to($(this).find(".btn-fill"), 0.6, {
        startAt: { y: "76%" },
        y: "0%",
        ease: Power2.easeInOut,
      });
    }
    if ($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), 0.3, {
        startAt: { color: "#1C1D20" },
        color: "#FFFFFF",
        ease: Power3.easeIn,
      });
    }
    $(this.parentNode).removeClass("not-active");
  });

  // Mouse Leave
  $(".btn-click.magnetic").on("mouseleave", function () {
    if ($(this).find(".btn-fill").length) {
      gsap.to($(this).find(".btn-fill"), 0.6, {
        y: "-76%",
        ease: Power2.easeInOut,
      });
    }
    if ($(this).find(".btn-text-inner.change").length) {
      gsap.to($(this).find(".btn-text-inner.change"), 0.3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: 0.3,
      });
    }
    $(this.parentNode).removeClass("not-active");
  });
}

initMagneticButtons();
 */