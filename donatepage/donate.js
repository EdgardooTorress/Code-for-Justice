const donationButton = document.getElementById("donateButton"); //pulls the button ID info from html
const nameInput = document.getElementById("nameInput") //Pulls ID from the nameInput
// Add quotes to paraphsis to have it look up the string. Idenfifies button//

donateButton.addEventListener('click', function() { //When button is clicked it will show the value from the user input
    console.log(nameInput.value);
    // alert("Thank you for your contributions!!")
})

// nameInput.addEventListener('click', function() {
//     console.log()
// })