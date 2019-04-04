var tileBg = document.getElementsByClassName('tile-bg')
var toTopBtn = document.getElementsByClassName('back-to-top')[0]
var header = document.getElementById('header')
var headerPos = header.offsetTop
var menuBtn = document.getElementsByClassName('menu-btn')[0]
var mobileMenu = document.getElementsByClassName('mobile-menu')[0]
var exitBtn = document.getElementsByClassName('exit-menu-btn')[0]
var body = document.getElementsByTagName('body')[0]

//Mobile menu functionality
function btnClicked() {
  mobileMenu.classList.add('active')
  body.style.overflow = 'hidden'
  exitBtn.addEventListener('click', function(){
    mobileMenu.classList.remove('active')
    body.style.overflowY = 'scroll'
  })
}
menuBtn.addEventListener('click', function(event){
  event.preventDefault()
  btnClicked()
})

//Dyanmic image gallery functionality
var imgArraySet = [
  [
    'https://scontent.cdninstagram.com/vp/9aa6d4bcbc0bdd9485616cc4756390d4/5D2A0754/t51.2885-15/sh0.08/e35/p640x640/53687528_1345630148925125_7375309830982956947_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/cca23d360fac0cd517c05389c30a281b/5CAC5E9B/t51.2885-15/sh0.08/e35/p640x640/45703448_300305693940779_379820531169170362_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/3c9dbcd6aea147088d51906e85b844b2/5D432570/t51.2885-15/sh0.08/e35/p640x640/54512444_1217271508442176_9209229127881517156_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/590923a8179e6e766a1815ecb26bc6e2/5D29C5A3/t51.2885-15/sh0.08/e35/p640x640/53759605_322637421937903_6299875872308771748_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/ae675ba7e1d58c9455895f54be6a9178/5CA7007C/t51.2885-15/sh0.08/e35/s640x640/44603836_944275999099951_8637240914046590514_n.jpg',
    'https://scontent.cdninstagram.com/vp/6601bb30a0dfea0c23c512ea67959364/5D347AD2/t51.2885-15/sh0.08/e35/s640x640/54511049_2356950694577399_7031777077460098032_n.jpg?_nc_ht=scontent.cdninstagram.com',
  ],
  [
    'https://scontent.cdninstagram.com/vp/3650eb24802af87ac5a5d2bfb7313955/5D4588E0/t51.2885-15/sh0.08/e35/s640x640/53921815_426641374769912_2131522264759142757_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/00f48d3bc8f92fd0d9b2265be3af95ec/5CB18E53/t51.2885-15/sh0.08/e35/s640x640/45501316_947355185435147_7766772780014966614_n.jpg',
    'https://scontent.cdninstagram.com/vp/b96ec20de0eef9a7ba6920d6a12dfca0/5CB18851/t51.2885-15/sh0.08/e35/p640x640/45318779_2959726834053556_5408958845344130872_n.jpg'
  ],
  [
    'https://scontent.cdninstagram.com/vp/c08dd9e2c45eba41e4bf147e290a760f/5CB267A3/t51.2885-15/sh0.08/e35/s640x640/45381708_569961636765705_2098069346629972306_n.jpg',
    'https://scontent.cdninstagram.com/vp/1653c577f94a57bbf687c7fbd968422e/5D45FCF1/t51.2885-15/sh0.08/e35/s640x640/54732362_601346733717149_3651513604455359558_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/5eb3e9a50a05756a8648163a2258653c/5CA9FA2A/t51.2885-15/sh0.08/e35/s640x640/44803117_340296483426261_6557964248686423335_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/0f3922f3cd54ce65bbb69c1d063af40c/5D348A92/t51.2885-15/sh0.08/e35/s640x640/53830626_1977090682390699_5647193628029269506_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/3785acd4954092e8ce909af0d207275f/5D38837C/t51.2885-15/sh0.08/e35/s640x640/54247418_555379741652551_5654859526820752974_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/1793fc265b177e699cf01d808261d7c6/5D2FC6A1/t51.2885-15/sh0.08/e35/s640x640/53747574_390992844817041_7407476760966629625_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/a60b54c4210332325bdfa77e66c50d12/5CAAD4B6/t51.2885-15/sh0.08/e35/s640x640/45643781_383309719074317_6749347089857396779_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/ed6a986f5d9ea7ea721d46dcd8351a9c/5D2BF128/t51.2885-15/sh0.08/e35/s640x640/54247965_2140452399400557_1587430823478026371_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/fa097d7e224d140357d7f90ebe7111a8/5D2EAF32/t51.2885-15/sh0.08/e35/s640x640/55736865_189470482024096_6628992068203004446_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/46d4896c1f6de86339d6d00907bbd455/5CD3F347/t51.2885-15/sh0.08/e35/p640x640/47581212_1954056374675649_6880423510932205987_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/0326772a301fbd1c9685b5c6d013e9e2/5D3EE1BD/t51.2885-15/sh0.08/e35/s640x640/53393228_642941832804198_765558736296588922_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/1910395dac51f5bb82257d5ae88dacdf/5D391BBB/t51.2885-15/sh0.08/e35/s640x640/54429288_790374341344131_4374202402726998065_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/4fedaf604d1b10db5624e7d38adc8b3e/5CAA226D/t51.2885-15/sh0.08/e35/s640x640/44843563_124919735173238_6447339478845765744_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/da6122950e27884a0b943396e988c1c9/5D48E99F/t51.2885-15/sh0.08/e35/s640x640/54277208_2353952291547651_2996244621524129638_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/ed6a986f5d9ea7ea721d46dcd8351a9c/5D2BF128/t51.2885-15/sh0.08/e35/s640x640/54247965_2140452399400557_1587430823478026371_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ],
  [
    'https://scontent.cdninstagram.com/vp/2db4fad0b7dd47d6ea9ccf297dbf99c2/5D4F95B6/t51.2885-15/sh0.08/e35/p640x640/54512132_361355261379461_6075177933272117189_n.jpg?_nc_ht=scontent.cdninstagram.com',
    'https://scontent.cdninstagram.com/vp/fffa8168ab5721c7939035326785863d/5CAA321E/t51.2885-15/sh0.08/e35/s640x640/44835971_1953014368334570_7006649196635534257_n.jpg',
    'https://scontent.cdninstagram.com/vp/78c8eb39dc3919aaccb2b6ec4dd52707/5D4E7E20/t51.2885-15/sh0.08/e35/p640x640/54220659_175391183444734_3379174637301564004_n.jpg?_nc_ht=scontent.cdninstagram.com'
  ]
]

var index = 0

function cycleImg() {
  var i
  for (i = 0; i < tileBg.length; i++) {
    switch (i) {
      //None timeout tiles
      case 0:
      tileBg[i].src = imgArraySet[0][index]
        break
      case 2:
      tileBg[i].src = imgArraySet[2][index]
        break
      case 4:
      tileBg[i].src = imgArraySet[4][index]
        break
      case 6:
      tileBg[i].src = imgArraySet[6][index]
        break
      case 8:
      tileBg[i].src = imgArraySet[8][index]
        break

      //Tiles with timeout
      case 1:
      setDelay(i)
        break
      case 3:
      setDelay(i)
        break
      case 5:
      setDelay(i)
      case 7:
      setDelay(i)
        break
      default:
    }
  }
  function setDelay(i) {
    setTimeout(function(){
      tileBg[i].src = imgArraySet[i][index]
    },500)
  }

  index++
  if (index >= imgArraySet[1].length) {
    index = 0
  }
}
setInterval(cycleImg, 1000)

//Back to top button functionality
this.onscroll = function () {
   toTopBtnOpacity()
}

function toTopBtnOpacity() {
  if (this.pageYOffset >= (headerPos + 300)) {
    toTopBtn.style.display = 'flex'
    toTopBtn.classList.add('active')
  } else if (this.pageYOffset < (headerPos + 300)){
    toTopBtn.classList.remove('active')
  }
}
