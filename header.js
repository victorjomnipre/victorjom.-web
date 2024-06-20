let menuList = document.getElementById("menu-list")
menuList.style.maxHeight = "0px";

function headerMenu() {
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}