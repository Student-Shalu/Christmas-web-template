const loginForm=document.querySelector(".containerBox");
const page=document.querySelector(".container-fluid");
function showBox(){
    loginForm.style.display="block";
    page.style.display="none";
}
function hideBox(){
    loginForm.style.display="none";
    page.style.display="block";
}