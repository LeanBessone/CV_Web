let modoOscuro = localStorage.getItem('modo-oscuro');
const cambiarModo = document.querySelector('#cambiar-modo');


const activarModoOscuro = () => {
    document.body.classList.add("modo-oscuro");
    localStorage.setItem("modo-oscuro","activado");
    cambiarModo.src="img/Sol.png";
};

const desactivarModoOscuro = () => {
    document.body.classList.remove("modo-oscuro");
    localStorage.setItem("modo-oscuro",null);
    cambiarModo.src="img/Luna.png";
};

if(modoOscuro === "activado"){
    activarModoOscuro();
};

cambiarModo.addEventListener('click', () => {
    modoOscuro = localStorage.getItem("modo-oscuro");
    if (modoOscuro !== "activado"){
        activarModoOscuro();
    } else{
        desactivarModoOscuro();
    }
});