function menuSlidesIn(){
    var checkbox = document.getElementById("btnControl")
    var menu = document.getElementById("menu-options")

    if(checkbox.checked == true){
        menu.style.left = "0%"
    }
    else{
        menu.style.left = "-100%"
    }
}