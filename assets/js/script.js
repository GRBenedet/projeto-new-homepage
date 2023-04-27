function menuShow() {
    let menuMobile = document.querySelector('.menu-celular')
    let botao = document.querySelector('.botao-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }   else {
        menuMobile.classList.add('open')
    }
    if (botao.classList.contains('hide')) {
        botao.classList.remove('hide');
    }   else {
        botao.classList.add('hide')
    }
}

function closeMenu() {
    let menuMobile = document.querySelector('.menu-celular')
    let botao = document.querySelector('.botao-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }   else {
        menuMobile.classList.add('open')
    }
    if (botao.classList.contains('hide')) {
        botao.classList.remove('hide');
    }   else {
        botao.classList.add('hide')
    }
}