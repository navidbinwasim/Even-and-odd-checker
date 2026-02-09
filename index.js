let input = document.getElementById("numtaker")
let output = document.getElementById("output")
let button = document.getElementById("subbtn")


button.onclick = function(){
    let theNumber = input.value;
    theNumber = Number(theNumber)
    if(theNumber % 2 == 0){
        output.textContent = "even"
    }
    else{
        output.textContent = "Odd"
    }
}

