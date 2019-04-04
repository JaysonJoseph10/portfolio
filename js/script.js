var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')
var body = document.getElementsByTagName('body')[0]
var underlay = document.getElementsByClassName('mob-menu-underlay')[0]
var linkBox = document.getElementsByClassName('box')

// var header = document.getElementsByTagName('header')[0]

var btnCLicked = function() {
  mobileMenu[0].classList.toggle('active')
  menuBtn[0].classList.toggle('activeBtn')
  underlay.classList.toggle('active')
  underlay.style.zIndex = '9'
  if (mobileMenu[0].classList.contains('active')) {
    body.style.overflowY = 'hidden'
  } else if (mobileMenu[0].classList.contains('active') == false) {
    body.style.overflowY = 'scroll'
    underlay.style.zIndex = '-1'
  }
  // if (mobileMenu[0].onblur() = true) {
  //   mobileMenu[0].classList.toggle('active')
  // }
}
var underlayClicked = function() {
  if (underlay.classList.contains('active')) {
    underlay.classList.toggle('active')
    mobileMenu[0].classList.toggle('active')
    menuBtn[0].classList.toggle('activeBtn')
    body.style.overflowY = 'scroll'
    underlay.style.zIndex = '-1'
  }
}

if (linkBox.length !== 0) {
  linkBox[2].addEventListener('click', function(event) {
    event.preventDefault()
  })
}
// var menuBlur = function() {
//   if (mobileMenu[0].classList.contains('active')) {
//     mobileMenu[0].classList.remove('active')
//   }
// }
underlay.addEventListener('click', underlayClicked)
menuBtn[0].addEventListener('click', btnCLicked)
// mobileMenu[0].addEventListener('focus', menuBlur, true)
// header[0].addEventListener('click', menuBlur)
