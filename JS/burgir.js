let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burgir_menu');
let page1 = document.querySelector('.burgir_page1');
let page2 = document.querySelector('.burgir_page2');
let page3 = document.querySelector('.burgir_page3');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

page1.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

page2.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

page3.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})