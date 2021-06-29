const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function luz(evt){
    const luz = document.querySelector('.luz img');

    function ligada(){
        luz.setAttribute("class", "ligada");
        luz.setAttribute("src", "src/img/ligada.png");
        btn.classList.remove("desliga");
        btn.classList.add("liga");
        body.style.backgroundColor = "rgb(228 227 227)";
    };
    function desligada(){
        luz.setAttribute("class", "desligada");
        luz.setAttribute("src", "src/img/desligada.png");
        btn.classList.remove("liga");
        btn.classList.add("desliga");
        body.style.backgroundColor = "#fff";
    };

    const verificarLuz = luz.classList.contains("ligada");
    
    if (!verificarLuz) {
        ligada();
    }else{
        desligada();
    };
    
    evt.preventDefault();
}

btn.addEventListener("click", luz);