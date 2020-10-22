function toggleMenu(){
    var menuItems = document.getElementById("nav-items");
    if(menuItems.classList.contains("full-width")){
        menuItems.classList.remove("full-width")
    }else{
        menuItems.classList.add("full-width")
    }
    console.log(menuItems.classList.toString());
}