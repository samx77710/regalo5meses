const btnMostrarCarta=document.getElementById('btnMostrarCarta');
const btnCerrar=document.getElementById('btnCerrar');
const overlay=document.getElementById('overlay');
const btnMusica=document.getElementById('btnMusica');
const cancion=document.getElementById('cancion');


btnMostrarCarta.addEventListener('click',()=>{
overlay.style.display='flex';
});


btnCerrar.addEventListener('click',()=>{
overlay.style.display='none';
});


btnMusica.addEventListener('click',()=>{
if(cancion.paused){
cancion.play();
btnMusica.textContent='Pausar música ⏸';
} else {
cancion.pause();
btnMusica.textContent='Reproducir música 🎶';
}
});