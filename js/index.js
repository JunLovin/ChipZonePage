const content = document.querySelector('body')
const darkMode = document.querySelector('.dark-change')

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active')
    content.classList.toggle('night')
})