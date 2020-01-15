document.addEventListener("DOMContentLoaded", function() {
    
    
    const btnGerar = document.getElementById('gerar')
    const btnFechar = document.getElementById('fechar')
    const divCorpo = document.getElementById('corpo')

    var stringInicial,stringFinal,diffString
    var nDiv = 0
    
    
    btnGerar.addEventListener('click', abreCard)
    btnFechar.addEventListener('click',fechaCard)
    


    function abreCard() {
        btnGerar.classList.add('hide')
        btnFechar.classList.remove('hide')
        // let novaDiv = document.createElement('div')
        // let novaP = document.createElement('p')
        startStop()
        stringInicial = pegarTime()
    
        nDiv = nDiv + 1
       
        GerarDiv(stringInicial,nDiv)
        

        // novaDiv.setAttribute('id', 'div' + nDiv)
        // novaDiv.classList.add('card')
        // novaP.classList.add('text-center')
        // novaP.innerHTML = pegarTime()
        
        // novaDiv.appendChild(novaP)
        // divCorpo.appendChild(novaDiv)
        
    }
    


    function fechaCard(){ 
        btnGerar.classList.remove('hide')
        btnFechar.classList.add('hide')
        
        startStop()
        diffString = pegarDiff()
        stringFinal = pegarTime()

        updateDiv(stringFinal,diffString)
        // let anteriorDiv = document.getElementById(ultimaDiv)
    
        // anteriorDiv.firstElementChild.innerHTML = stringInicial+ '  ------------------------>  ' + pegarTime()
        // divCorpo.appendChild(anteriorDiv)
    
        // console.log(diffString)
    }
    

    function pegarTime(){ // Retorna o valor em string do tempo ATUAL - usando Daye()
        let data = new Date()
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        return(hora+':'+minuto+':'+segundo)
    }
    function pegarDiff(){ //Tras o valor do cronometro
        let diff = displayHours+":"+displayMinutes+":"+displaySeconds
        reset()
        return diff
    }



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

















// -------------------------------------------------------------------------------------

    //Define vars to hold time values
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    
    //Define vars to hold "display" value
    var displaySeconds = 0;
    var displayMinutes = 0;
    var displayHours = 0;
    
    //Define var to hold setInterval() function
    var interval = null;
    
    //Define var to hold stopwatch status
    var status = "stopped";
    
    //Stopwatch function (logic to determine when to increment next value, etc.)
    function stopWatch(){
    
        seconds++;
    
        //Logic to determine when to increment next value
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
    
            if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }
    
        }
    
        //If seconds/minutes/hours are only one digit, add a leading 0 to the value
        if(seconds < 10){
            displaySeconds = "0" + seconds.toString();
        }
        else{
            displaySeconds = seconds;
        }
    
        if(minutes < 10){
            displayMinutes = "0" + minutes.toString();
        }
        else{
            displayMinutes = minutes;
        }
    
        if(hours < 10){
            displayHours = "0" + hours.toString();
        }
        else{
            displayHours = hours;
        }
    
        //Display updated time values to user
        console.log( displayHours + ":" + displayMinutes + ":" + displaySeconds )
    
    }
    //scrollBy
    
    
    function startStop(){
    
        if(status === "stopped"){
    
            //Start the stopwatch (by calling the setInterval() function)
            interval = window.setInterval(stopWatch, 1000);
            //document.getElementById("startStop").innerHTML = "Stop";
            status = "started";
    
        }
        else{
    
            window.clearInterval(interval);
           // document.getElementById("startStop").innerHTML = "Start";
            status = "stopped";
    
        }
    
    }
    
    //Function to reset the stopwatch
    function reset(){
    
        window.clearInterval(interval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        //document.getElementById("display").innerHTML = "00:00:00";
        //document.getElementById("startStop").innerHTML = "Start";
    
    }
