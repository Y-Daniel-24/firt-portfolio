// loader
window.onload= function(){
    alert('ya se cargo')
}

// variables Generales
let animate='animate__animated';
let magic='magictime';
let zoomOut='animate__zoomOut';
let zoomIn='animate__zoomIn';
// Menu
function botonMenu(){
    let aparecerMenu=document.querySelector('.menuDesplegable');
    aparecerMenu.style.display='flex';
    let imagenAvion=document.querySelector('.menuDesplegable__img');
    let textoAvion=document.querySelector('.menuDesplegable__ul');
    imagenAvion.classList.remove(magic,'puffOut');
    imagenAvion.classList.add(animate,'animate__zoomInDown');
    textoAvion.classList.remove(magic,'puffOut');
    textoAvion.classList.add(animate,'animate__zoomInDown');
}
function ocultarMenu(){
    let imagenAvion=document.querySelector('.menuDesplegable__img');
    let textoAvion=document.querySelector('.menuDesplegable__ul');
    imagenAvion.classList.remove(animate,'animate__zoomInDown');
    imagenAvion.classList.add(magic,'puffOut');
    textoAvion.classList.remove(animate,'animate__zoomInDown');
    textoAvion.classList.add(magic,'puffOut');
    setTimeout(() => {
        let ocultarMenu= document.querySelector('.menuDesplegable');
    ocultarMenu.style.display='none';
    }, 500);
}

// Efecto Pagina__1

if(window.onload=true){
    setTimeout(() => {
    let primerSection=document.querySelector('.primer__section');
    let segundoSection=document.querySelector('.segundo__section');
    let containerTree=document.querySelector('.container__grid')
    let nombre=document.querySelector('.nombre');
    let logo= document.querySelector('.logo');
    nombre.classList.add(animate,zoomOut);
    setTimeout(() => {
        segundoSection.style.display='block';
        containerTree.classList.add(magic,'vanishIn')
    }, 500);
    setTimeout(() => {
        nombre.style.display='none';
        primerSection.style.display='none';
        }, 500);
}, 4000);
}



// pagina__2
    let programador=document.querySelector('.programador');
    let curriculum=document.querySelector('.curriculum');
    let habilidades=document.querySelector('.cuadro-habilidades');
    let boton=document.getElementById('btn');
    let botonCur=document.getElementById('btn-2');
    let textoHabilidades=document.querySelectorAll('.diseño__H');
    let fondoHabilidades=document.querySelectorAll('.diseño-H');

    boton.addEventListener("click",()=>{

    if(boton.innerText=='Ver más'){
        programador.classList.add(magic,'rotateLeft');
        boton.innerHTML='<h2>Regresar</h2>';
        setTimeout(() => {
            programador.classList.add("programador-clase");
            habilidades.classList.remove("cuadro__habilidades-clase");
            habilidades.classList.add(magic,'spaceInRight')
            setTimeout(() => {
                habilidades.classList.remove(magic,'spaceInRight');
                programador.classList.remove(magic,'rotateLeft');
                setTimeout(() => {
                    for (let i = 0; i < textoHabilidades.length; i++) {
                        textoHabilidades[i].classList.add(animate,'animate__bounceOut');
                    };
                    setTimeout(() => {
                        for (let i = 0; i < fondoHabilidades.length; i++) {
                            fondoHabilidades[0].classList.add('html');
                            fondoHabilidades[1].classList.add('css');
                            fondoHabilidades[2].classList.add('Js');
                            fondoHabilidades[3].classList.add('REACT');
                            fondoHabilidades[4].classList.add('vue');
                            fondoHabilidades[5].classList.add('photoshop');
                            fondoHabilidades[6].classList.add('illustrator');
                            fondoHabilidades[7].classList.add('solidwork');
                            fondoHabilidades[8].classList.add('coreldraw');
                            fondoHabilidades[9].classList.add('office');
                            fondoHabilidades[10].classList.add('español');
                            fondoHabilidades[11].classList.add('ingles');
                            fondoHabilidades[12].classList.add('portugues');
                        }
                    }, 500);
                }, 100);
            }, 1000);
        }, 500);
    }else if (boton.innerText=='Regresar'){
        boton.innerHTML='<h2>Ver más</h2>';
        habilidades.classList.add(magic,'rotateLeft');
        for (let i = 0; i < fondoHabilidades.length; i++) {
            fondoHabilidades[0].classList.remove('html');
            fondoHabilidades[1].classList.remove('css');
            fondoHabilidades[2].classList.remove('Js');
            fondoHabilidades[3].classList.remove('REACT');
            fondoHabilidades[4].classList.remove('vue');
            fondoHabilidades[5].classList.remove('photoshop');
            fondoHabilidades[6].classList.remove('illustrator');
            fondoHabilidades[7].classList.remove('solidwork');
            fondoHabilidades[8].classList.remove('coreldraw');
            fondoHabilidades[9].classList.remove('office');
            fondoHabilidades[10].classList.remove('español');
            fondoHabilidades[11].classList.remove('ingles');
            fondoHabilidades[12].classList.remove('portugues');
        }
        for (let i = 0; i < textoHabilidades.length; i++) {
            textoHabilidades[i].classList.remove(animate,'animate__bounceOut');
        };
        setTimeout(() => {
            habilidades.classList.add("cuadro__habilidades-clase");
            habilidades.classList.remove(magic,'rotateLeft');
            programador.classList.remove("programador-clase");
            programador.classList.add(magic,'spaceInRight')
        }, 500);
    };
    
    if(botonCur.innerText=='Regresar'){
        botonCur.innerHTML='<h2>Curriculum</h2>';
        curriculum.classList.add(magic,'rotateLeft');
        setTimeout(() => {
            curriculum.style.display='none';
            curriculum.classList.remove(magic,'rotateLeft');
        }, 500);
    }
});

    botonCur.addEventListener("click", ()=>{

        let curriculum=document.querySelector('.curriculum');
        let programador=document.querySelector('.programador');
        let habilidades=document.querySelector('.cuadro-habilidades');
        
        if(botonCur.innerText=='Curriculum'){
            if(boton.innerText=='Ver más'){
                programador.classList.add(magic,'rotateLeft');
                botonCur.innerHTML='<h2>Regresar</h2>';
                setTimeout(() => {
                    programador.classList.add('programador-clase');
                    programador.classList.remove(magic,'rotateLeft');
                    curriculum.style.display='block';
                    curriculum.classList.add(magic,'spaceInRight');
                }, 500);
            }else if(boton.innerText=='Regresar'){
                habilidades.classList.add(magic,'rotateLeft');
                boton.innerHTML='<h2>Ver más</h2>';
                botonCur.innerHTML='<h2>Regresar</h2>';
                setTimeout(() => {
                    habilidades.classList.add('cuadro__habilidades-clase');
                    habilidades.classList.remove(magic,'rotateLeft');
                    for (let i = 0; i < fondoHabilidades.length; i++) {
                        fondoHabilidades[0].classList.remove('html');
                        fondoHabilidades[1].classList.remove('css');
                        fondoHabilidades[2].classList.remove('Js');
                        fondoHabilidades[3].classList.remove('REACT');
                        fondoHabilidades[4].classList.remove('vue');
                        fondoHabilidades[5].classList.remove('photoshop');
                        fondoHabilidades[6].classList.remove('illustrator');
                        fondoHabilidades[7].classList.remove('solidwork');
                        fondoHabilidades[8].classList.remove('coreldraw');
                        fondoHabilidades[9].classList.remove('office');
                        fondoHabilidades[10].classList.remove('español');
                        fondoHabilidades[11].classList.remove('ingles');
                        fondoHabilidades[12].classList.remove('portugues');
                    }
                    for (let i = 0; i < textoHabilidades.length; i++) {
                        textoHabilidades[i].classList.remove(animate,'animate__bounceOut');
                    };
                    curriculum.style.display='block';
                    curriculum.classList.add(magic,'spaceInRight');
                }, 500);
            }
        }else if(botonCur.innerText=='Regresar'){
            curriculum.classList.add(magic,'rotateLeft');
            botonCur.innerHTML='<h2>Curriculum</h2>';
            setTimeout(() => {
                curriculum.style.display='none';
                curriculum.classList.remove(magic,'rotateLeft');
                programador.classList.remove('programador-clase');
                programador.classList.add(magic,'spaceInRight');
            }, 500);
        }
    });
// parte 3


function botonRadio1(){

    selector=document.querySelector('.segunda-tercera').style.display;

    selector2=document.querySelector('.segunda-tercera2').style.display;
        if(selector2==='block'){
           document.querySelector('.segunda-tercera2').classList.add('animate__animated','animate__backOutUp');
           setTimeout(() => {
            document.querySelector('.segunda-tercera2').style.display='none';
           }, 400); 
        }
    
    document.querySelector('.elecion-trabajos .button-general img').classList.add('animate__animated','animate__headShake');


setTimeout(() => {

    if(selector==='block'){

        document.querySelector('.segunda-tercera').classList.remove('animate__animated','animate__fadeInDown');

        document.querySelector('.segunda-tercera').classList.add('animate__animated','animate__backOutUp');
        
        setTimeout(() => {
            document.querySelector('.segunda-tercera').style.display='none';
        }, 500);            
    }else{
        document.querySelector('.segunda-tercera').style.display='block'
         document.querySelector('.segunda-tercera').classList.add('animate__animated','animate__fadeInDown');
    }
    document.querySelector('.elecion-trabajos .button-general img').classList.remove('animate__animated','animate__headShake');

}, 300);


}
function botonRadio2(){

selector=document.querySelector('.segunda-tercera2').style.display;
document.querySelector('.segunda-tercera').style.display='none';
document.querySelector('.segunda-tercera').classList.add('animate__animated','animate__backOutUp');

    document.querySelector('.elecion-trabajos .radio-2 img').classList.add('animate__animated','animate__headShake');


setTimeout(() => {

    if(selector==='block'){
        document.querySelector('.segunda-tercera').style.display='none';
        document.querySelector('.segunda-tercera2').classList.remove('animate__animated','animate__fadeInDown');

        document.querySelector('.segunda-tercera2').classList.add('animate__animated','animate__backOutUp');
        
        setTimeout(() => {
            document.querySelector('.segunda-tercera2').style.display='none';
        }, 500);            
    }else{
        document.querySelector('.segunda-tercera2').style.display='block'
        document.querySelector('.segunda-tercera2').classList.add('animate__animated','animate__fadeInDown');
    }
    document.querySelector('.elecion-trabajos .radio-2 img').classList.remove('animate__animated','animate__headShake');

}, 300);


}

// funcion para abir los logos
function abirLogo1() {
    document.querySelector('.imagenes-web-grandes').style.display='block';
    document.getElementById('box-grande').style.display='block';
    document.querySelector('.box-logo1').style.display='block';
}

function abirLogo2() {
    document.querySelector('.imagenes-web-grandes').style.display='block';
document.getElementById('box-grande').style.display='block';
document.querySelector('.box-logo2').style.display='block';
}

function abirLogo3() {
    document.querySelector('.imagenes-web-grandes').style.display='block';
document.getElementById('box-grande').style.display='block'
document.querySelector('.box-logo3').style.display='block'

}
function abirLogo4() {
    document.querySelector('.imagenes-web-grandes').style.display='block';
document.getElementById('box-grande').style.display='block'
document.querySelector('.box-logo4').style.display='block'

}
function abirLogo5() {
    document.querySelector('.imagenes-web-grandes').style.display='block';
    document.getElementById('box-grande').style.display='block';
    document.querySelector('.box-logo5').style.display='block';

}
// funcion para cerrar los logos

function cerrarIcono() {

document.querySelector('.imagenes-web-grandes').style.display='none';
document.getElementById('box-grande').style.display='none'; 
document.querySelector('.box-logo1').style.display='none';
document.querySelector('.box-logo2').style.display='none';
document.querySelector('.box-logo3').style.display='none';
document.querySelector('.box-logo4').style.display='none';
document.querySelector('.box-logo5').style.display='none';
}

// set time three
function cargarBox() {
    setInterval(() => {
        const selector2=document.getElementById('resposive').style.display='none'
        const selector3=document.getElementById('optimizado').style.display='none';
        const selector=document.getElementById('dinamico').style.display='block';
    
        setTimeout(() => {
            const selector=document.getElementById('dinamico').style.display='none';
            const selector3=document.getElementById('optimizado').style.display='block';
            const selector2=document.getElementById('resposive').style.display='none'
        }, 5000);
    
        setTimeout(() => {
            const selector2=document.getElementById('resposive').style.display='block'
            const selector=document.getElementById('dinamico').style.display='none';
            const selector3=document.getElementById('optimizado').style.display='none';
        }, 10000);
    
        //    box 2
    
        const selector4=document.getElementById('resposive-1').style.display='block'
        const selector5=document.getElementById('optimizado-1').style.display='none';
        const selector6=document.getElementById('dinamico-1').style.display='none';
    
        setTimeout(() => {
        const selecto6=document.getElementById('dinamico-1').style.display='block';
        const selector5=document.getElementById('optimizado-1').style.display='none';
        const selector4=document.getElementById('resposive-1').style.display='none';
        }, 5000);
    
        setTimeout(() => {
        const selector4=document.getElementById('resposive-1').style.display='none'
        const selector6=document.getElementById('dinamico-1').style.display='none';
        const selector5=document.getElementById('optimizado-1').style.display='block';
        }, 10000);
    
        // box-3
    
        const selector7=document.getElementById('resposive2').style.display='none'
        const selector8=document.getElementById('optimizado2').style.display='block';
        const selector9=document.getElementById('dinamico2').style.display='none';
    
        setTimeout(() => {
        const selecto9=document.getElementById('dinamico2').style.display='none';
        const selector8=document.getElementById('optimizado2').style.display='none';
        const selector7=document.getElementById('resposive2').style.display='block'
        }, 5000);
    
        setTimeout(() => {
        const selector7=document.getElementById('resposive2').style.display='none'
        const selector9=document.getElementById('dinamico2').style.display='block';
        const selector8=document.getElementById('optimizado2').style.display='none';
        }, 10000);
    }, 15000);
}
// Contactame

let contactame= document.querySelector('.Contacto');
contactame.addEventListener("click",()=>{
    alert('En mantenimiento')
});
// efecto scroll

let scroll=document.querySelectorAll('.scroll');

function mostrarScroll(){
let scrollTop=document.documentElement.scrollTop; 
for(var i=0; i<scroll.length;i++){
    let alturaScroll=scroll[i].offsetTop;
    if (alturaScroll -400 < scrollTop) {
        scroll[i].style.opacity=1;
        scroll[i].classList.add("scrollArriba");
    }
}
}

window.addEventListener('scroll',mostrarScroll);