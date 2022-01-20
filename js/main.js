let openBtn = document.getElementById('searchBtn');

let hide = document.getElementById('hideContent')

let close = document.getElementById('closeBtn');

let openBox = document.getElementById('openModal')

let openButton = document.getElementById('userBtn')

let closeButton = document.getElementById('closeModal');

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
