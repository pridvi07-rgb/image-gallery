let images = document.querySelectorAll(".gallery img");
let current = 0;

function openLightbox(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;

    images.forEach((img,index)=>{
        if(img.src===src){
            current=index;
        }
    });
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

function changeImage(step){
    current += step;

    if(current<0)
        current = images.length-1;

    if(current>=images.length)
        current = 0;

    document.getElementById("lightbox-img").src =
    images[current].src;
}
