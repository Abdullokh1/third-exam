let openBtn = document.getElementById('searchBtn');

let hide = document.getElementById('hideContent')

let close = document.getElementById('closeBtn');

let openBox = document.getElementById('openModal')

let openButton = document.getElementById('userBtn')

let closeButton = document.getElementById('closeModal');

let openThunder = document.getElementById('thunderBtn');

let hideThunder = document.getElementById('hideThunder')

let closeThunder = document.getElementById('closeThunder');

let openPrice = document.getElementById('priceBtn');

let hidePrice = document.getElementById('priceHideContent');

let exit = document.getElementById('exitBtn');

openBtn.addEventListener('click', function(){
  hide.classList.add('show');
})
close.addEventListener('click', function(){
  hide.classList.add('remove');
})
close.addEventListener('click', function(){
  hide.classList.remove('show');
})

openButton.addEventListener('click', function(){
  openBox.classList.add('show-modal');
})
closeButton.addEventListener('click', function(){
  openBox.classList.remove('show-modal');
})

openThunder.addEventListener('click', function(){
  hideThunder.classList.add('display');
})
closeThunder.addEventListener('click', function(){
  hideThunder.classList.remove('display');
})

openPrice.addEventListener('click', function(){
  hidePrice.classList.add('visible');
})
exit.addEventListener('click', function(){
  hidePrice.classList.remove('visible');
})
