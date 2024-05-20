const cSocial = document.querySelectorAll(".c-social");
console.log(cSocial);
cSocial.forEach(social => {
    social.addEventListener("click" , ()=>{
        let theSocial = social.innerText;
        if(theSocial == "GitHub"){
            
            window.location.href = 'https://github.com/AathiEswar';
        }
        else if(theSocial == "LinkedIn"){
            
            window.location.href = 'https://www.linkedin.com/in/aathi-eswar-5ab416229/';
        }
        else if(theSocial == "Resume"){
            
                // var cvUrl = '../Aathi Eswar Resume Official.pdf';

                // var downloadLink = document.createElement('a');
                // downloadLink.href = cvUrl;
                // downloadLink.download = 'Aathi Eswar Resume Official.pdf';
                // document.body.appendChild(downloadLink);
                // downloadLink.click();
                // document.body.removeChild(downloadLink);
            
        }
        else if(theSocial == "Whatsapp"){
            
            window.location.href = 'https://wa.me/918072135754';
        }
    })
    
})