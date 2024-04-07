
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    const mm = gsap.matchMedia();
    const t1 = gsap.timeline();
    mm.add("(max-width: 800px)", () => {

    }
    )

    t1
    .from(".intro-texts p" , {
        opacity : 0,

        x : 200,
        stagger : 0.5
    })
    .to(".intro-texts p" , {
        opacity : 1,

        x : 0,
    })
    gsap.to(".intro-screen" , {
        y : -1*window.innerHeight-400,
        delay : 4,
        duration : 1.5,
        ease: "power3.inOut",
    })

    const timelineP = gsap.timeline();
const titles = gsap.utils.toArray(".p-innerText");

titles.forEach(title => {
  const text = new SplitType(title);
 
  

      timelineP
        .from(text.chars , {
          opacity : 0,
          y : 80,
          rotateX : -90,
          stagger : 0.02,
        } , "<")

        .to(text.chars , {
          opacity : 1,
          y : -80,
          rotateX : 90,
          stagger : 0.02,
        } , "<1")

    const mainTextSplit = new SplitType(".main-text");
    gsap.to(".main-text" , {
          delay : 6.5,
          opacity : 1,
          // y : -80,
        
          stagger : 0.5,
        } , "<1")

    const t2 = gsap.timeline();
    t2.from(".char" , {
      delay : 6,
      opacity : 0,
      y : 100,
      stagger : 0.02,
    })
    .to(".char" , {
    
      opacity: 1, 
      y : 0,
    })
    .to(".char" , {
      opacity : 1,
      scale : 1.05,
      delay : 1,
    })

  
  
  
})


    
    

    
 
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

   });


