//copy menu for mobile
function copyMenu(){
    var dptCategory=document.querySelector('.dpt-cat');
    var dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;

    var mainNav=document.querySelector('.header-nav nav');
    var navPlace=document.querySelector('.off-canvas nav');
    navPlace.innerHTML=mainNav.innerHTML;

    var topNav=document.querySelector('.header-top .wrapper');
    var topPlace=document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButtton=document.querySelector('.trigger');
    closeButton=document.querySelector('.t-close');
    addclass=document.querySelector('.site');
menuButtton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

//show sub menu on mibile
const submenu=document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu)=>menu.addEventListener('click', toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item)=>item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}
//slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });