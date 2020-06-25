let activeMenu = document.querySelector('.bars-menu');
let navLink = document.querySelector('.nav-link');
let bodyFocus = document.querySelector('.bodyFocus');

activeMenu.addEventListener('click', function(){
  activeMenu.classList.toggle('bars-animation')
  navLink.classList.toggle("isActive");
  bodyFocus.classList.toggle("focusActive");
})
bodyFocus.addEventListener('click', function(){
  bodyFocus.classList.remove("focusActive");
  activeMenu.classList.remove('bars-animation')
  navLink.classList.remove("isActive");
})


/*var Formulaire = document.querySelector('la classe du parent de ton formulaire');
var SubscribeBtn = document.querySelector('la classe de ton bouton');

SubscribeBtn.addEventListener('click', afficheFormulaire)
function afficheFormulaire(){
  Formulaire.classList.toggle('visible')
}*/