const boton_tours=document.getElementById("explore_tours");
const seccion=document.getElementById("tours");

boton_tours.addEventListener("click",()=>
{
    seccion.scrollIntoView({ behavior: 'smooth' });
})