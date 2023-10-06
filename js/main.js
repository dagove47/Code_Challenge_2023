
    const loader = document.getElementById("loader");
    const formNewMessage = document.getElementById('formNewMessage');
    const formInputs = document.querySelectorAll('#newParticipant, #newEmail, #newGitHub');
    const submitBtn = document.getElementById('submitBtn');

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

    
    /* 
        Contact
    */

        formNewMessage.addEventListener('submit', function(event) {
           event.preventDefault();
        
           submitBtn.value = 'Sending...';
        
           const serviceID = 'default_service';
           const templateID = 'code_challenge_2023';
        
           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitBtn.value = 'Send Email';
              alert('Sent!');
            }, (err) => {
                submitBtn.value = 'Send Email';
              alert(JSON.stringify(err));
            });
        });

    // formNewMessage.addEventListener('submit', function(event) {
    //     event.preventDefault();


    //     if (!formNewMessage.checkValidity()) {
    //         formNewMessage.classList.add('was-validated');
    //     } else {
    //         submitBtn.value = 'Sending...';
    //         const serviceID = 'default_service';
    //         const templateID = 'code_challenge_2023';

    //         emailjs.sendForm(serviceID, templateID, this)
    //             .then(() => {
    //                 submitBtn.value = 'Send Registration!';
    //                 clearInputs(formInputs);
    //                 formNewMessage.classList.remove('was-validated');
    //                 alert('Sent!');
    //             }, (err) => {
    //                 submitBtn.value = 'Send Registration!';
    //                 clearInputs(formInputs);
    //                 formNewMessage.classList.remove('was-validated');
    //                 alert(JSON.stringify(err));
    //             });
    //     }
    // });

    // function clearInputs(inputs) {
    //     inputs.forEach(input => {
    //         input.value = '';
    //     });
    // }

