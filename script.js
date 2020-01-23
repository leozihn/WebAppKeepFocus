document.addEventListener("DOMContentLoaded", function() {
    
const btnGerar = document.getElementById('gerar')
const btnFechar = document.getElementById('fechar')
const divCorpo = document.getElementById('corpo')
const divBarra = document.getElementById('divBarra')
const btnHora = document.getElementById('hora')
const inputHora = document.getElementById('inputHora')
const divHora = document.getElementById('divHora')


var stringInicial,stringFinal,diffString
var timeInicial,timeFinal
var nDiv = 0

// em miliseconds da tira oque quise string ou time 

var mInicio,mFinal
var bInicio,bFinal
var h = 2 //horas
var pBarra = 100/((h)*3600) 


// btnHora.addEventListener('click',iniciaHora)
btnGerar.addEventListener('click', abreCard)
btnFechar.addEventListener('click',fechaCard)

//  function iniciaHora(){
//     if(Number.isInteger(inputHora.value) == False){
//         alert("Digite as horas.")
//     }else{
//          pBarra = 100/((inputHora.value)*3600)
//          btnGerar.classList.remove('hide')
//          divHora.classList.add('hide')
//        abreCard()
//        console.log(inputHora.value)
//  }   
//  }



function abreCard() {
    btnGerar.classList.add('hide')
    btnFechar.classList.remove('hide')

    stringInicial = pegarString()
    timeInicial = pegarTime()
    nDiv = nDiv + 1

    // let d = new Date()
    // mInicio = d.getTime(
    

    if (divBarra.lastElementChild == null){ 
        console.log(divBarra.lastElementChild)
    }else{
        fechaBarraV()
    }

    abreBarra()

    GerarDiv(timeInicial,nDiv)
}
function fechaCard(){ 
    btnGerar.classList.remove('hide')
    btnFechar.classList.add('hide')
    
    stringFinal = pegarString()
    timeFinal = pegarTime()

    // console.log(timeInicial,timeFinal)
    // console.log(stringInicial,stringInicial)
    diffString = diffTime(stringInicial,stringFinal)

    fechaBarra()
    abreBarraV()

    updateDiv(timeFinal,diffString)
}

// BARRAS VERDES 
function abreBarra() {
    let d = new Date()
    bInicio = d.getTime()
    let barra = document.createElement('div')
    barra.classList.add('progress-bar','bg-success')
    barra.setAttribute('role',"progressbar")
    // let widBarra = 
    // barra.style.width = "0.5%"
    //aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    divBarra.appendChild(barra)
}
function fechaBarra(){
    let d = new Date()
    bFinal = d.getTime()
    
    //diff entre bInicial e bFinal
    let dif = bFinal - bInicio
    // descobri qnt de minutos ai nessa dif 
    let widBarra = dif % 60;

    // console.log(widBarra)

    let barra = divBarra.lastElementChild
    barra.style.width = (widBarra*pBarra)+"%"
    // console.log((widBarra*pBarra)+"%")
}


// BARRAS VERMELHAS
function abreBarraV() {
    let d = new Date()
    bInicio = d.getTime()
    let barra = document.createElement('div')
    barra.classList.add('progress-bar','bg-danger')
    barra.setAttribute('role',"progressbar")
    divBarra.appendChild(barra)
}
function fechaBarraV(){
    let d = new Date()
    bFinal = d.getTime()
    
    //diff entre bInicial e bFinal
    let dif = bFinal - bInicio
    // descobri qnt de minutos ai nessa dif 
    let widBarra = dif % 60;

    // console.log(widBarra)

    let barra = divBarra.lastElementChild
    // console.log(barra)
    barra.style.width = (widBarra*pBarra)+"%"
}






//
function pegarString(){ 
    let d = Date()
    let dString = d.slice(4,24)
    return dString
}
function pegarTime(){ 
    let d = Date()
    let dString = d.slice(16,24)
    return dString
}
function diffTime(d1,d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);

    let res = Math.abs(date1 - date2) / 1000;
    console.log(res)
    
    // get hours        
    let hours = Math.floor(res / 3600) % 24;        
    // get minutes
    let minutes = Math.floor(res / 60) % 60;
    // get seconds
    let seconds = res % 60;

    if(hours<=9){hours = "0"+hours}
    if(minutes<=9){minutes = "0"+minutes}
    if(seconds<=9){seconds = "0"+seconds}

    return hours+":"+minutes+":"+seconds
}

// function addTime(horas){
//     // passando um inteiro em horas
//     let m = horas * 3600000
//     let d = new Date()
//     let m2 = d.getTime() 
//     let r = m + m2 
//     miliInicial = m 
//     miliFinal = r
// }



//


function GerarDiv(stringInicial,nDiv){
    let d1 = document.createElement("div")
    let d2 = document.createElement("div")
    let d3 = document.createElement("div")
    let d4 = document.createElement("div")
    let d5 = document.createElement("div")
    let d6 = document.createElement("div")
    let d7 = document.createElement("div")
    let d8 = document.createElement("div")
    let d9 = document.createElement("div")

    d2.appendChild(d4)
    d2.appendChild(d5)
    d2.appendChild(d6)
    d2.appendChild(d7)
    d3.appendChild(d8)
    d3.appendChild(d9)
    d1.appendChild(d2)
    d1.appendChild(d3)


    d1.classList.add("row",'w-100','d-flex','shadow', 'rouded', 'mx-0', 'my-2','bg-success')
    d2.classList.add('col-4', 'p-0')
    d3.classList.add('col-8', 'p-0')
    // d4.classList.add()
    // d5.classList.add()
    // d6.classList.add()
    // d7.classList.add()
    // d8.classList.add()
    d9.classList.add("py-1", "mt-1", "text-align")
    

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")
    let p6 = document.createElement("p")

    p1.setAttribute('style',"font-size: 16px; color: white;")
    p2.setAttribute('style',"font-size: 26px; color: white;")
    p3.setAttribute('style',"font-size: 16px; color: white;")
    p4.setAttribute('style',"font-size: 26px; color: white;")
    p5.setAttribute('style',"font-size: 20px; color: white;")
    p6.setAttribute('style','font-size: 56px; color: white;')

    // p1.setAttribute()
    // p2.setAttribute()
    // p3.setAttribute()
    p4.classList.add('p4', )
    // p5.setAttribute()
    p6.classList.add('p6')

    p1.innerHTML = "horario Inicio"
    p2.innerHTML = stringInicial
    p3.innerHTML = 'hora Termino'
    // p4.innerHTML = stringFinal
    p5.innerHTML = "Voce esteve focado por"
    // p6.innerHTML = diffStrings

    d4.appendChild(p1)
    d5.appendChild(p2)
    d6.appendChild(p3)
    d7.appendChild(p4)
    d8.appendChild(p5)
    d9.appendChild(p6)
    
    d1.setAttribute('id','div'+nDiv)
    
    divCorpo.appendChild(d1)
}

function updateDiv(stringFinal,diffString){
    let d1 = document.getElementById('div'+nDiv)
    let d2 = d1.firstChild
    let d3 = d1.lastChild
    
    let p4 = d2.lastChild
    let p6 = d3.lastChild
    
    let t4 = p4.firstChild
    let t6 = p6.firstChild 
    
    t4.innerHTML = stringFinal
    t6.innerHTML = diffString
}

})  // Fim dom DOM
