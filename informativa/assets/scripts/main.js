//Obtener los elemtentos de la clase.close//
let links = document.querySelectorAll(".close");

//recorrelos
links.forEach(function(link){

    //agregar un evento click a cada uno de ellos
    //case sensitive
    link.addEvenListener("click", function(ev){
        ev.preventDafault();
        let content = document.querySelector('.content')
//Quitarle las clases de animaciones que ya tiene
content.classList.remove(animate__zoomInDown);
content.classList.remove(animate__animated);

//agregar las clases de animaciones que ya tiene
content.classList.add("animate_fadeUutUp");
content.classList.add("animate_animated");

setTimeout(function(){
    window.history.go(-1);
}, 600);
setInterval

return false;
});
});