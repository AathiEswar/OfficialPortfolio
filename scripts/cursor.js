const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove" , (e) =>{
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
   })


const cursorABout = document.querySelector(".cursor-about");

document.addEventListener("mousemove" , (e) =>{
cursorABout.style.left = e.pageX + "px";
cursorABout.style.top = e.pageY + "px";
  })


const cursorHero = document.querySelector(".cursor-hero");

document.addEventListener("mousemove" , (e) =>{
  cursorHero.style.left = e.pageX + "px";
  cursorHero.style.top = e.pageY + "px";
    })




// const github = document.querySelector(`[data-social="github"]`);
// github.addEventListener("mouseover" , (e)=>{
//   text.innerHTML = "linkedin"
// })

const text = document.querySelector(".cursor-text p");
const textLong = text.innerText.length;
text.innerHTML = text.innerText.split('').map(
  (char , i) => 
  `<span style="transform:rotate(${(i * 360) / textLong}deg)"> ${char} </span>`
).join('');
