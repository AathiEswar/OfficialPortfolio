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
            
      
                // Replace 'path_to_your_cv.pdf' with the actual path to your CV file
                var cvUrl = '../Aathi Resume 2024-pdf.pdf';
                
                // Create an anchor element
                var downloadLink = document.createElement('a');
                
                // Set the href attribute to the CV URL
                downloadLink.href = cvUrl;
                
                // Set the download attribute to force download
                downloadLink.download = 'Aathi Resume 2024-pdf.pdf';
                
                // Append the anchor element to the document body
                document.body.appendChild(downloadLink);
                
                // Click the anchor element to trigger download
                downloadLink.click();
                
                // Clean up: remove the anchor element
                document.body.removeChild(downloadLink);
            
        }
        else if(theSocial == "Whatsapp"){
            
            window.location.href = 'https://wa.me/8072135754';
        }
    })
    
})