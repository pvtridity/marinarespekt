let title = document.querySelectorAll('.acc_title');
    content = document.querySelectorAll('.acc_content');


for (let i = 0; i < title.length; i++){
  title[i].addEventListener('click', () => {
    content[i].classList.toggle('open')
  })
}
