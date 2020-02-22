(function() {
    let form = document.getElementById('form');
      
    function validMail(mail) {
        let reg = /^[\w]{1}[\w\.]+@[\w]+\.[a-z]{2,4}$/i; 
        let error = document.getElementById('errmail');  
        let valid = reg.test(mail);
       
        if (valid){ 
            error.classList.remove('active');
            return true;
        } else {
            error.classList.add('active');
            return false;
        }
    };

    function validPassword(password) {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}$/; 
        let error = document.getElementById('errpassword');  
		let valid = reg.test(password);
		 
        if (valid){ 
            error.classList.remove('active');
            return true; 
        } else { 
            error.classList.add('active');
            return false;
        }
    };

    function submitForm() {
        let mail = document.getElementById('mail').value;
        let password = document.getElementById('password').value;

        if (!validMail(mail)) validPassword(password);

        if (!validPassword(password)) validMail(mail);

        if (validMail(mail) && validPassword(password)) {
            alert('OK!');
        }        
    };

    form.addEventListener('submit', function(event) { 
        event.preventDefault();
        validMail(mail);
        validPassword(password);
        submitForm();
    });

    document.querySelector('.mail').addEventListener('click', function() {
        document.getElementById('errmail').classList.remove('active');
    });

    document.querySelector('.password').addEventListener('click', function() {
        document.getElementById('errpassword').classList.remove('active');
    });
})();
