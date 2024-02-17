mobileButton = document.querySelector(".mobile-button");
mobileBar = document.querySelector(".navbar-nav");
menuItem = document.querySelectorAll('.navbar-nav a');
menuIcon = document.querySelector('.mobile-button .bi-list')
function mobileMenuOpener(){
    menuIcon.classList.toggle("bi-x-lg");
    menuIcon.style.transition ='1s ';
    mobileBar.classList.toggle("Active");



}
mobileButton.addEventListener('click',()=>{
 mobileMenuOpener()

})
menuItem.forEach((item)=>{
    item.addEventListener('click', mobileMenuOpener)
})

function animationCount(){
    anime({
        targets: '#pet',
        innerHTML: [0, 200], // De 0 para 100
        round: 1, // Arredonda para números inteiros
        easing: 'easeInOutQuad', // Tipo de animação
        duration: 2000 // Duração em milissegundos
    });
    anime({
        targets: '#cir',
        innerHTML: [0, 130], // De 0 para 100
        round: 1, // Arredonda para números inteiros
        easing: 'easeInOutQuad', // Tipo de animação
        duration: 2000 // Duração em milissegundos
    });
    
    anime({
        targets: '#loja',
        innerHTML: [0, 15], // De 0 para 100
        round: 1, // Arredonda para números inteiros
        easing: 'easeInOutQuad', // Tipo de animação
        duration: 2000 // Duração em milissegundos
    });
    anime({
        targets: '#numero',
        innerHTML: [0, 1], // De 0 para 100
        round: 1, // Arredonda para números inteiros
        easing: 'easeInOutQuad', // Tipo de animação
        duration: 2000 // Duração em milissegundos
    });

}

function reconizeSections(){
    area = document.querySelector('main')
     const rect = area.getBoundingClientRect();
     if(rect.top <= 50 && rect.bottom >= 50){
        animationCount()
        
     }
}
window.addEventListener("scroll",reconizeSections)