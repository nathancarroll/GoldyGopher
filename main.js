document.addEventListener("DOMContentLoaded", function() {
    console.log('main.js loaded');

    // Display the numbers and Goldy/Gopher replacements on the DOM
    function start(){
        let lowerBound = parseInt(document.getElementById("lowerBound").value) || 0;
        let upperBound = parseInt(document.getElementById("upperBound").value) || 100;
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
            document.getElementById("output").innerHTML += output + "<br/>";
        }
    }

    // Reset the display area and lower/upper bound inputs
    function reset(){
        document.getElementById("lowerBound").value = 0;
        document.getElementById("upperBound").value = 100;
        document.getElementById("output").innerText = "";
    };

    // Initialize click handlers
    document.getElementById("start").addEventListener("click", start);
    document.getElementById("reset").addEventListener("click", reset);
  });