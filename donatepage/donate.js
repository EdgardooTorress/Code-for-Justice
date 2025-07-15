const donationButton = document.getElementById("donateButton") //pulls the button ID info from html
const nameInput = document.getElementById("nameInput")//Pulls ID from the nameInput
const cardInfo = document.getElementById("cardInfo")
const form = document.getElementById("form")
const errorText = document.getElementById("error")
const donateAmount = document.getElementById("donateAmount")
const expDate = document.getElementById('expDate')
// Add quotes to paraphsis to have it look up the string. Idenfifies button//

donateButton.addEventListener('click', function() { //When button is clicked it will show the value from the user input
    console.log(nameInput.value , cardInfo.value, donateAmount.value);
})

form.addEventListener('submit', (e) => {        //Listens for when the form is submitted to cancel page from submittng
    let messages = []
    if (nameInput.value === '' || nameInput.value == null){
        messages.push('Please enter your name')
    }

    if(cardInfo.value.length != 16 ){
        messages.push('Must be a 16 digits card value')
    }

    if(expDate.value == 0){
            messages.push('Please Enter a valid date')
        }

    if(donateAmount.value == 0) {
        messages.push('Please enter a amount above 0')
    }

    
    
    if (messages.length > 0) {
        e.preventDefault()
        errorText.innerText = messages.join(', ')
    }

    if (messages.length === 0) {
        e.preventDefault()
        alert("Thank you for your contributions of $" + donateAmount.value)
        document.getElementById("form").reset();
        errorText.innerText = ''
        //Put in () when passing parameters into a funciton 
    }
})

// nameInput.addEventListener('click', function() {
//     console.log()
// })