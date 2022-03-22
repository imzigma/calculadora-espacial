const resultplane_div = document.querySelector('.result p');
const result_div = document.querySelector('.resultPeso h2');
const mercurio_div = document.getElementById('mercury');
const venus_div = document.getElementById('vens');
const marte_div = document.getElementById('mars');
const jupiter_div = document.getElementById('jupitr');
const saturno_div = document.getElementById('saturn');
const urano_div = document.getElementById('uranus');
const neptuno_div = document.getElementById('neptune');
const descriptionGra = document.querySelector('.descriptionGravity p');

const g_mercurio = 3.7;
const g_venus = 8.8;
const g_tierra = 9.8;
const g_marte = 3.711;
const g_jupiter = 24.8;
const g_saturno = 10.4;
const g_urano = 8.87;
const g_neptuno = 11.15;


function main() {
    mercurio_div.addEventListener('click', () => calcularPeso(usuario, g_mercurio, 'Mercurio'));
    venus_div.addEventListener('click', () => calcularPeso(usuario, g_venus, 'Venus'));
    marte_div.addEventListener('click', () => calcularPeso(usuario, g_marte, 'Marte'));
    jupiter_div.addEventListener('click', () => calcularPeso(usuario, g_jupiter, 'Jupiter'));
    saturno_div.addEventListener('click', () => calcularPeso(usuario, g_saturno, 'Saturno'));
    urano_div.addEventListener('click', () => calcularPeso(usuario, g_urano, 'Urano'));
    neptuno_div.addEventListener('click', () => calcularPeso(usuario, g_neptuno, 'Neptuno'));
}


let pesoUsuario = prompt("¿Cual es tu peso?");
let usuario = parseInt(pesoUsuario);

function calcularPeso (usuario, planeta, nombreplaneta) {
        const pesoFinal = usuario * planeta / g_tierra;
        if (pesoFinal) {
            resultplane_div.innerHTML="Has escogido a "+nombreplaneta;
            result_div.innerHTML= "Tu peso sería de: "+pesoFinal.toFixed()+"Kgs";
            descriptionGra.innerHTML="Esto se debe a que se multiplica tu peso ("+usuario+"Kgs) por la gravedad de "+nombreplaneta+" ("+planeta+") y a su vez se divide entre la gravedad de la Tierra ("+g_tierra+")";
        } else {
            resultplane_div.innerHTML="No has introducido un peso valido";
            result_div.innerHTML="Intentalo nuevamente"
        };

}
main();