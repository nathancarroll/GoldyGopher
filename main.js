document.addEventListener("DOMContentLoaded", function() {
    //Log callback to confirm the file is loaded
    console.log('main.js loaded');

    // Display the numbers and Goldy/Gopher replacements on the DOM
    function start(){
        let lowerBound = parseInt(document.getElementById("lowerBound").value) || 0; // Default to 0 if input is unparsable for some reason
        let upperBound = parseInt(document.getElementById("upperBound").value) || 100; // Default to 100

        for (let i=lowerBound; i<=upperBound; i++){
            let output;
            if (i % 21 === 0){ // Divisible by both 7 and 3
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