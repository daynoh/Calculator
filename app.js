// initialize parameters to use for calculations

// Checking whether its the first calculation
let first_calc = false;
// for calculating functions
let running_calc = 0

let secon_n = 0

const topScreen = document.querySelector('.screen').getElementsByClassName('calcs')
const btmScreen = document.querySelector('.screen').getElementsByClassName('final-val')
const clrScreenbtn = document.getElementById('clr-btn')
const deleteBtn = document.querySelector('.delete')

const numberBtns = document.querySelectorAll('.number.btn')

const oprBtns = document.querySelectorAll('.op.btn')
// adding event listners to all the numbers


/// Event listeners
console.log(numberBtns.length)
// event listener for the number values
for (let i = 0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click',function(e)
    {
        console.log(e.target.innerText)
        addToScreen(e.target.innerText)

    })
}

// event listener for the operators

for (let i = 0; i< oprBtns.length; i++){
    oprBtns[i].addEventListener('click',function(e){
        if (first_calc === false)
        {
            topScreen[0].innerText = btmScreen[0].innerText + e.target.innerText
            running_calc = parseFloat(btmScreen[0].innerText)
            btmScreen[0].innerText = ""
            first_calc = true;
        }
        else{
            if (e.target.innerText === '=')
            {
                let a = topScreen[0].innerText
                let op = topScreen[0].innerText.slice(-1)
                console.log(op)
                operate(parseFloat(a),parseFloat(btmScreen[0].innerText),op)
                topScreen[0].innerText = ''
                btmScreen[0].innerText = running_calc
                first_calc = false;
            }else{
                if(btmScreen[0].innerText === "")
                {
                    topScreen[0].innerText = topScreen[0].innerText + e.target.innerText
                }else{
                    operate(running_calc,parseFloat(btmScreen[0].innerText),e.target.innerText)
                    btmScreen[0].innerText = ""
                    topScreen[0].innerText = running_calc
                }
                
                }
            
            
        }
        
    })
}

clrScreenbtn.addEventListener('click',clear);
deleteBtn.addEventListener('click',del);


/// functions for event listeners
function operate(x,y,operator)
{
    if (operator === '+')
    {
        running_calc = x + y
    }
    else if(operator === '-')
    {
        running_calc = x - y
    }
    else if (operator === 'x')
    {
        running_calc = x*y;
    }
    else if (operator === '/')
    {
        running_calc = x/y;
    }

}



function clear()
{
    running_calc = 0
    first_calc = false
    clearScreen()
}


function clearScreen()
{
    topScreen[0].innerText = "";
    btmScreen[0].innerText = "";
}


function addToScreen(e){
    btmScreen[0].innerText += e


}

function del(){
   
    let val = btmScreen[0].innerText.slice(0,-1)
    btmScreen[0].innerText = val
}
