console.log('Page loaded successfully!');

document.addEventListener("DOMContentLoaded", function(){
    let title = document.querySelector("#title");

    let paragraph = document.querySelector("p");

    title.textContent = "New title";
    paragraph.textContent = "Changed by javascript";

    title.style.color = "red";
    title.style.fontSize = "80px";

    //make title green
    title.style.color = "green";
    //make paragraph bigger
    
    //chnage paragrraph text
    paragraph.textContent = "Changed by javascript version 2.0";

    let toggleButton = document.querySelector("#btn");
    let fontSize = 10;
    paragraph.style.fontSize = `${fontSize}px`;

    // use toggle to change the background color
    // document.body.style.backgroundColor = "grey"
    // document.body.style.backgroundColor = "white"

    let isOn = false;
    toggleButton.addEventListener("click", function() {
        console.log("Button was clicked!");
        
        if (isOn) {
           document.body.style.backgroundColor = "grey";  
        }
        else {
            document.body.style.backgroundColor = "white";    

        }
        isOn = !isOn;
       
    });


    let greetBtn = document.querySelector("#greetBtn");
    let input = document.querySelector("#nameInput");
    greetBtn.addEventListener("click", function(){
        console.log(`Hello ${input.value}`);
    });


});
