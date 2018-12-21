var menuBtn = document.getElementsByClassName('menu-btn')

var mobileMenu = document.getElementsByClassName('mobile-menu')

// var header = document.getElementsByTagName('header')[0]

var btnCLicked = function() {
  mobileMenu[0].classList.toggle('active')
  menuBtn[0].classList.toggle('activeBtn')
  mobileMenu[0].focus()
  // if (mobileMenu[0].onblur() = true) {
  //   mobileMenu[0].classList.toggle('active')
  // }
}
// var menuBlur = function() {
//   if (mobileMenu[0].classList.contains('active')) {
//     mobileMenu[0].classList.remove('active')
//   }
// }

menuBtn[0].addEventListener('click', btnCLicked)
// mobileMenu[0].addEventListener('focus', menuBlur, true)
// header[0].addEventListener('click', menuBlur)
