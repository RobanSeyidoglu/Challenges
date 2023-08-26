let button = document.querySelector("button");
let p = document.querySelector("p");
button.onclick= function(){
    if(getComputedStyle(p).display==="none"){
        p.style.display = "flex"
    }
    else{
        p.style.display = "none"
    }
}
