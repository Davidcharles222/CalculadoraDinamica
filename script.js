const teclasNum=[...document.querySelectorAll('.num')]
const teclasOp=[...document.querySelectorAll('.op')]
const teclaRes=document.querySelector('.res')
const display=document.querySelector('#display')
const tcpy=document.getElementById('tcpy')
const tlimpar=document.getElementById('tlimpar')
const tigual=document.getElementById('tigual')
const calc_aba=document.querySelector('.calc_aba')
const calc=document.getElementById('calc')
const img_aba_calc=document.getElementById('img_aba_calc')

let sinal = false
let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        sinal = false
        if(evt.target.innerHTML==','){
            if(!decimal){
                decimal=true
                if(display.innerHTML=='0'){
                    display.innerHTML='0,'
                }else{
                display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=='0'){
                display.innerHTML=""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener('click',(evt)=>{
        if(!sinal){
            sinal=true
            decimal = false
            if(display.innerHTML=='0'){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=='x'){
                display.innerHTML+='*'
            }else{
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML=0
})

tigual.addEventListener('click',(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML=res
})

tcpy.addEventListener('click',(evt)=>{
    //no navegador copiar para area de transferência o valor do display
    navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener('click',(evt)=>{
    //toggle se calc tiver a class calc_exibir ele tira, se não tiver ele poe.
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        evt.target.setAttribute('src','seta_left.svg')
    }else{
        evt.target.setAttribute('src','seta_right.svg')
    }
})