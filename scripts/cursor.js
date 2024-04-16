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