let input=document.getElementById("input")
let num_c_point=document.querySelectorAll(".item")
let operators=document.querySelectorAll(".operator")
let equal=document.getElementById("equal")
let expression=""

input.addEventListener("change",()=>{
    expression=input.value
})

//enter key press for the result 
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     equal.click();
    }
});

equal.addEventListener("click", ()=>{
    let answer
    try {
        let temp_ans=""
        let i=0
        for(i in input.value){
            if(input.value[i]=="X"){
                temp_ans+="*"
            }else if(input.value[i]=="÷"){
                temp_ans+="/"
            }else{
                temp_ans+=input.value[i]
            }
        }
        answer=eval(temp_ans)
    } catch (error) {
        answer="INVALID"
    }
    input.value=answer
    expression=""
})

operators.forEach(operator=>{
    operator.addEventListener("click", ()=>{
        if(expression.length==0){
            expression=input.value+operator.innerHTML
            input.value=expression
        }else{
            expression=expression+operator.innerHTML
            input.value=expression
        }
    })
})

num_c_point.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        if(btn.innerHTML==="C"){
            expression=""
            input.value=""
        }else{
            expression=expression+btn.innerHTML
            input.value=expression
        }
    })
})



