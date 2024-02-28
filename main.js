document.addEventListener("DOMContentLoaded", function() {
    console.log('main.js loaded');

    document.getElementById("startStop").addEventListener("click", function(){
        let lowerBound = document.getElementById("lowerBound").value || 0;
        let upperBound = document.getElementById("upperBound").value || 100;
        console.log('click start');
        console.log(lowerBound);
        console.log(upperBound)
        for (let i=lowerBound; i<=upperBound; i++){
            let output;
            if (i % 21 === 0){
                output = "Goldy Gopher";
            } else if (i % 7 === 0){
                output = "Gopher";
            } else if (i % 3 === 0){
                output = "Goldy";
            } else {
                output = i;
            }
            console.log('output', output);  
            //document.getElementById("output").innerText = output;
        }
    });

    document.getElementById("reset").addEventListener("click", function(){
        console.log('click reset');
    });
  });