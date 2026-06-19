let myImage = document.getElementById("sildShow");
let images = ["WhatsApp Image 2026-06-17 at 11.09.29 PM (1).jpeg", "WhatsApp Image 2026-06-17 at 11.09.29 PM (2).jpeg","WhatsApp Image 2026-06-17 at 11.09.29 PM.jpeg"];
let i = 0;


function slideshow() {
    myImage.setAttribute('src', images[i]); // images[2]

    if(i == images.length - 1) {
        i = 0;
    } else {
        i++; // i = 2
    }

    setTimeout(function() {
        slideshow();
    }, 2000)
}

slideshow();