
const loader = document.getElementById("loader");

const formNewMessage = document.getElementById('formNewMessage');
const formInputs = document.querySelectorAll('#newName, #newEmail, #newSubject, #newMessage')
const submitBtn = document.getElementById('submitBtn');

formNewMessage.addEventListener('submit', function (event) {
    event.preventDefault();


    if (!formNewMessage.checkValidity()) {
        formNewMessage.classList.add('was-validated');
    } else {
        submitBtn.value = 'Sending...';
        const serviceID = 'default_service';
        const templateID = 'portfolio_form';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitBtn.value = 'Send Message!';
                clearInputs(formInputs);
                formNewMessage.classList.remove('was-validated');
                alert('Sent!');
            }, (err) => {
                submitBtn.value = 'Send Message!';
                clearInputs(formInputs);
                formNewMessage.classList.remove('was-validated');
                alert(JSON.stringify(err));
            });
    }
});

function clearInputs(inputs) {
    inputs.forEach(input => {
        input.value = '';
    });
}

/* 
    Loader
*/
window.addEventListener("load", () => {
    loader.style.display = "none";
})


/* 
    Modal
*/
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})