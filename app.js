const button = document.querySelector('.btns')
const result = document.querySelector('.resultsScreen')

let calc ={
    firstNum: '' ,
    secondNum: '' ,
    operator: '',
    resultOfOp: ''

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
            console.log(e.target.className)
            if (signPressed === false){
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
            switch(calc.operator){
                case '+':
                    calc.resultOfOp = (parseInt(calc.firstNum,10) + parseInt(calc.secondNum,10)).toString()
                    break
                case '-':
                    calc.resultOfOp = (parseInt(calc.firstNum,10) - parseInt(calc.secondNum,10)).toString()
                    break
                case '%':
                    calc.resultOfOp = (parseInt(calc.firstNum,10) / parseInt(calc.secondNum,10)).toString()
                    break
                case '*':
                    calc.resultOfOp = (parseInt(calc.firstNum,10) * parseInt(calc.secondNum,10)).toString()
                    break
            }

            result.innerHTML = `<p> ${calc.resultOfOp}</p>`

            calc.firstNum = ''
            calc.secondNum = ''
            calc.operator = ''
            calc.resultOfOp = ''
            signPressed = false
            break
        case 'clear':
            break
        case 'root':
            break
        case '.':
            break
        
        default:
            console.log('nie klikaj tu kurwa')
    }

    //calc.firstNum calc.operator calc.secondNum

})