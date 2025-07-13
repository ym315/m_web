$(document).ready(function(){
    //menu
    $('header').load('menu.html header>div');
    $('.main_left').load('menu.html .main_menu, menu.html .main_left_dummy');
    $('.main_left_dummy').load('menu.html .main_left_dummy>div');
    // $('footer').load('menu.html footer>ul');
    // $('aside').load('menu.html aside');   


    $(document).on('click', '.menu-btn', function() {
        $('.menu-btn').toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('.overlay').toggleClass('open');
        $('body').toggleClass('menu-open');
    });

    $(document).on('click', '.overlay', function () {
        $('.menu-btn').removeClass('open');
        $('.mobile-menu').removeClass('open');
        $('.overlay').removeClass('open');
        $('body').removeClass('menu-open');
    });

    function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    

});

