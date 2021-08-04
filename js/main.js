let menuItems = document.getElementsByClassName("app-menu-item");
let menuLinks = document.getElementsByClassName("app-menu-item__link");
let headerTitle = document.getElementsByClassName("app-header__title")[0];
let closeMenu = document.getElementById("closeMenu");
let appBody = document.getElementsByClassName("app-body")[0];
let appNavbar = document.getElementsByClassName("app-navbar")[0];

for (const menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        const currentMenuItem = e.target.closest(".app-menu-item");

        for (const item of menuItems) {
            item.classList.remove("app-menu-item_active");
        }

        currentMenuItem.classList.add("app-menu-item_active");
        headerTitle.innerHTML = currentMenuItem.innerText;
    });
}

closeMenu.addEventListener('click', () => {
    closeMenu.classList.toggle("menu-close_open")
    appBody.classList.toggle("app-body_navbar_mini");
    appNavbar.classList.toggle("app-navbar_mini");
})

window.addEventListener('resize', function(event) {
    if(window.innerWidth < 992){
        closeMenu.classList.remove("menu-close_open")
        appBody.classList.add("app-body_navbar_mini");
        appNavbar.classList.add("app-navbar_mini");
    }
    else{
        closeMenu.classList.add("menu-close_open")
        appBody.classList.remove("app-body_navbar_mini");
        appNavbar.classList.remove("app-navbar_mini");  
    }
}, true);