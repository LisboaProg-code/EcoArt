const menu = document.getElementById("menu")
const sidebar = document.getElementById("sidebar")
const main = document.getElementById("main")

menu.addEventListener('click', ()=> {
    sidebar.classList.toggle("menuToggle")
    main.classList.toggle("menuToggle")
})