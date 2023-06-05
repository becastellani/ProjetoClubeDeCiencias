
const menuResponsivo = document.querySelector('.nav__bar__butom'); 
const fechaMenu = document.getElementById('corpo__pagina'); // chama o elemento main para fechar o menu



menuResponsivo.addEventListener('click', () =>{ // adiciona um ouvite de eventos

    console.log("funcionu");

     const ativaMenu = document.querySelector('.nav__bar__lista'); // chama o eelemento para adicionar a classe que ativa o menu
     ativaMenu.classList.toggle('nav__bar__responsivo'); // insere a classe que ativa o menu
})

// fechaMenu.addEventListener('click', () =>{ // adiciona ouvite de evento no main para fechar o menu
    
//     const fechaMenu = document.getElementById('menu__lista');
//     fechaMenu.classList.remove('ative__menu'); // remove a classe que ativa o menu

    
// });