onload=function(){
        rotarImagenes();
        setInterval(rotarImagenes,3000);
        ocultar_chat()
}
var imagenes=new Array(
        'images/slider1.jpg',
        'images/slider2.jpg',
        'images/slider3.jpg')

function rotarImagenes(){
    var index=Math.floor((Math.random()*imagenes.length));
    document.getElementById("slide").src=imagenes[index];
}

function mostrar(id){
    elem = document.getElementById(id)

    if(elem.style.display == "initial"){
        elem.style.display = "none"
    }else{
        elem.style.display = "initial"
    }
}

function ocultar_chat(){
    chat = document.getElementById("cont-chat")
    chat.style.display = "none";
}

var urls_video = {
    1: 'http://www.youtube.com/embed/KpGLzsPlMjQ?feature=oembed&amp;amp;wmode=opaque',
    2: 'http://www.youtube.com/embed/UWqfoNbe7Ns?feature=oembed&amp;amp;wmode=opaque',
    3: ''
}

function mostrar_video(n){
    video = document.getElementById('iframe-video');
    video.src = urls_video[n]
}