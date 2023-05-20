const nav=document.getElementById("Navbar");
const btnm=document.getElementById("mode");
//changing theme
btnm.addEventListener("click",changeMode);
function changeMode(){
    // console.log(nav.className); testing purpose
    if (nav.classList.contains("bg-light")) {
        btnm.innerHTML="Dark";
        nav.classList.replace("navbar-light","navbar-dark");
        nav.classList.replace("bg-light","bg-dark");
    }
    else{
        btnm.innerHTML="Light";
        nav.classList.replace("navbar-dark","navbar-light");
        nav.classList.replace("bg-dark","bg-light");

    }
}