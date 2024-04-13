document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();
  const t1 = gsap.timeline();
  mm.add("(min-width: 800px)", () => {
    const splitType1 = document.querySelectorAll(".am-ans");

    splitType1.forEach((word, i) => {
      const text = new SplitType(word, { types: "words" });

      gsap.fromTo(
        text.words,
        {
          opacity: 0,

          x: 50,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger: {
            trigger: word,
            start: "-30% center",
            end: "50% center",
            scrub: true,
            // markers: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const splitType2 = document.querySelectorAll(".programings-skills h1");

    splitType2.forEach((word, i) => {
      const text = new SplitType(word, { types: "words" });

      gsap.fromTo(
        text.words,
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger: {
            trigger: word,
            start: "-50% center",
            end: "50% center",
            scrub: true,
            // markers: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    const splitType3 = document.querySelectorAll(".web-app-skills h1");

    splitType3.forEach((word, i) => {
      const text = new SplitType(word, { types: "words" });

      gsap.fromTo(
        text.words,
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger: {
            trigger: word,
            start: "-50% center",
            end: "160% center",
            scrub: true,
            // markers: true,
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

      // const parallexImage = gsap.timeline();
      // parallexImage
      // .from(".project-ss" , {
      //   y:100,
      //   scrollTrigger:{
      //     // markers : true,
      //     trigger : ".project-holder",
      //     actions : "play reset play reset",
      //     start : "top center" ,
      //     end : "bottom center",
      //     scrub : true,

      //   },

      // })
      // to(".project-ss" , {
      //   y : 0
      // })


  });

  t1.from(".intro-texts p", {
    opacity: 0,

    x: 200,
    stagger: 0.5,
  }).to(".intro-texts p", {
    opacity: 1,

    x: 0,
  });
  gsap.to(".intro-screen", {
    y: -1 * window.innerHeight - 400,
    delay: 4,
    duration: 1.5,
    ease: "power3.inOut",
  });

  const timelineP = gsap.timeline();
  const titles = gsap.utils.toArray(".p-innerText");

  titles.forEach((title) => {
    const text = new SplitType(title);

    timelineP
      .from(
        text.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      )

      .to(
        text.chars,
        {
          opacity: 1,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );

    const mainTextSplit = new SplitType(".main-text");
    gsap.to(
      ".main-text",
      {
        delay: 6.5,
        opacity: 1,
        // y : -80,

        stagger: 0.5,
      },
      "<1"
    );

    const t2 = gsap.timeline();
    t2.from(".char", {
      delay: 6,
      opacity: 0,
      y: 100,
      stagger: 0.02,
    })
      .to(".char", {
        opacity: 1,
        y: 0,
      })
      .to(".char", {
        opacity: 1,
        scale: 1.05,
        delay: 1,
      });
  });

  document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = el.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", scrollIntoView: {} });
      }
    });
  });

  const lenis = new Lenis({
    duration: 2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
});
