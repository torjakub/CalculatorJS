const button = document.querySelector('.btns')
const result = document.querySelector('.resultsScreen')

let calc ={
    firstNum: '' ,
    secondNum: '' ,
    operator: '',
    gotResult: false

}

let signPressed = false;

button.addEventListener('click',(e)=>{
    //console.log(typeof(parseInt(e.target.className,10)) + " " + e.target.className)

    switch(e.target.className){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '00':
        case '.':
            if (signPressed === false && calc.gotResult == true){
                calc.firstNum = e.target.className
                calc.gotResult = false
            } else if (signPressed === false && calc.gotResult == false){
                calc.firstNum += e.target.className
            } else if (signPressed === true){
                calc.secondNum += e.target.className
            }
            result.innerHTML = `<p> ${calc.firstNum} ${calc.operator} ${calc.secondNum}</p>`
            break
        case '+':
        case '-':
        case '%':
        case '*':
            calc.operator = e.target.className
            signPressed = true;
            result.innerHTML = `<p> ${calc.firstNum} ${calc.operator} ${calc.secondNum}</p>`
            break

        case 'result':
            if(calc.secondNum == ''){
                switch(calc.operator){
                    case '+':
                        calc.firstNum = (parseFloat(calc.firstNum,10) + parseFloat(calc.firstNum,10)).toString()
                        break
                    case '-':
                        calc.firstNum = (parseFloat(calc.firstNum,10) - parseFloat(calc.firstNum,10)).toString()
                        break
                    case '%':
                        calc.firstNum = (parseFloat(calc.firstNum,10) / parseFloat(calc.firstNum,10)).toString()
                        break
                    case '*':
                        calc.firstNum = (parseFloat(calc.firstNum,10) * parseFloat(calc.firstNum,10)).toString()
                        break
                }
            }else{
                switch(calc.operator){
                    case '+':
                        calc.firstNum = (parseFloat(calc.firstNum,10) + parseFloat(calc.secondNum,10)).toString()
                        break
                    case '-':
                        calc.firstNum = (parseFloat(calc.firstNum,10) - parseFloat(calc.secondNum,10)).toString()
                        break
                    case '%':
                        calc.firstNum = (parseFloat(calc.firstNum,10) / parseFloat(calc.secondNum,10)).toString()
                        break
                    case '*':
                        calc.firstNum = (parseFloat(calc.firstNum,10) * parseFloat(calc.secondNum,10)).toString()
                        break
                } 
            }
            
            

            result.innerHTML = `<p> ${calc.firstNum}</p>`

            calc.secondNum = ''
            calc.operator = ''

            signPressed = false
            calc.gotResult = true
            break
        case 'clear':
            calc.firstNum = ''
            calc.secondNum = ''
            calc.operator = ''
            calc.gotResult = false
            result.innerHTML = `<p></p>`
            break
        case 'root':
            if(signPressed == false){
                calc.firstNum = Math.sqrt(calc.firstNum)
            }else if(signPressed == true){
                calc.secondNum = Math.sqrt(calc.secondNum)               
            }
            result.innerHTML = `<p> ${calc.firstNum} ${calc.operator} ${calc.secondNum}</p>`
            break
        
        default:
            console.log('nie klikaj tu kurwa')
    }

    //calc.firstNum calc.operator calc.secondNum

})