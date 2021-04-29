function userInput() {
    
    let myVar = document.getElementById("myInput").value;
    
    // console.log(alphabet_Soup(myVar));
    myFunction(alphabet_Soup(myVar));
}

function alphabet_Soup(_param) { 
     return _param.split("").sort().join("");
         
}
function myFunction(param) {
    document.getElementById("change").innerHTML = param;
}



// console.log(alphabet_Soup(myVar));

// console.log(alphabet_Soup("Exercises"));
