function processInput() {
    var input = document.getElementById("input1").value;
    var output = document.getElementById("output1");

    // Do some processing with the input
    var processedInput = "You entered: " + input;

    // Update the output
    output.innerHTML = processedInput;
}