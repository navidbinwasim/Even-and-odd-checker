let input = document.getElementById("numtaker");
let output = document.getElementById("output");
let button = document.getElementById("subbtn");


button.onclick = function(){
    let theNumber = input.value;
    theNumber = Number(theNumber)
    
    output.classList.remove("even","odd", "invalid");

    if(input.value.trim() === ""){
        output.textContent = "Please enter a number";
        output.classList.add("invalid");
    }
    else if(isNaN(theNumber)){
        output.textContent = "Invalid number!";
        output.classList.add("invalid");
    }
    else if(theNumber % 2 === 0){
        output.textContent ="even";
        output.classList.add("even")
    }
    else{
        output.textContent ="odd";
        output.classList.add("odd")
    }

    output.style.opacity = 0;
    setTimeout(()=> {
        output.style.opacity = 1;
    }, 50);
};

