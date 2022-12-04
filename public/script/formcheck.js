        
        var nameError= document.getElementById('name-error');
        var birthError= document.getElementById('birthday-error');
        var emailError= document.getElementById('email-error');
        var phoneError= document.getElementById('phone-error');
        var streetError= document.getElementById('street-error');
        var cityError= document.getElementById('city-error');
        var zipcodeError= document.getElementById('zipcode-error');
        var usernameError=document.getElementById('Username-error');
        var usernameCorrect = document.getElementById('Username-correct');
        var passwordError=document.getElementById('password-error');
        var passwordCorrect=document.getElementById('password-correct');
        var password2Error=document.getElementById('password2-error');
        var password2Correct=document.getElementById('password2-correct');
        var usernameLoginError=document.getElementById('LoginUsername-error');
        var usernameLoginCorrect = document.getElementById('LoginUsername-correct');
        var passwordLoginError=document.getElementById('Loginpassword-error');
        var passwordLoginCorrect=document.getElementById('Loginpassword-correct');
        

        function validateName(){
            var name = document.getElementById('name').value;

            if(name.length < 1){
                nameError.innerHTML = 'Name is required';
                return false;
            }
            if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
                nameError.innerHTML = 'Write full name';
                return false;

        }

        nameError.innerHTML = "&#9989;";
        return true;
    }

        function validateBirth(){
            var birth = document.getElementById('birthday').value;

            if(birth.length == 0){
                birthError.innerHTML = "Birthday is required";
                return false;
            }
            birthError.innerHTML = "&#9989;";
            return true;
        }

        function validateEmail(){
            var email = document.getElementById('email').value;

            if(email.length == 0){
                emailError.innerHTML = "Email is required";
                return false;
            }

            if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                emailError.innerHTML='Email Invalid';
                return false;
            }
            emailError.innerHTML='&#9989;';
            return true;
        }

        function validatePhone(){
            var phone = document.getElementById('phone').value;
            if(phone.length==0){
                phoneError.innerHTML = 'Phone is required';
                return false;
            }
            if(phone.length != 10){
                phoneError.innerHTML = '10 digits please';
                return false;
            }
            if (!phone.match(/^[0-9]{10}$/)) {
                phoneError.innerHTML = 'Only digits please. ';
                return false;
            }

            phoneError.innerHTML='&#9989;';
            return true;

        }

        function validateStreet(){
            var street = document.getElementById('streetaddress').value;

            if(street.length<1){
                streetError.innerHTML='The Street is required';
                return false;
            }

            streetError.innerHTML='&#9989;';
            return true;


        }
        function validateCity(){
            var city = document.getElementById('city').value;

            if(city.length < 1){
                cityError.innerHTML='The city is required';
                return false;
            }
            cityError.innerHTML='&#9989;';
            return true;
        }
         function validateZip(){
            var zipcode = document.getElementById('zipcode').value;

            if(zipcode.length == 0){
                zipcodeError.innerHTML='The ZipCode is required';
                return false;
            }

            if(zipcode.length != 5){
                zipcodeError.innerHTML='5 digits please';
                return false;
            }

            if (!zipcode.match(/^[0-9]{5}$/)) {
                zipcodeError.innerHTML='Only digits please';
                return false;
            }
            zipcodeError.innerHTML='&#9989;';
            return true;

         }

         function validateUsername(){
            var username = document.getElementById('username').value;

            if(username.length ==0){
                usernameError.innerHTML='The User Name is required';
                usernameCorrect.innerHTML='';
                return false;
            }


            if(username.length>0 && username.length<8){
                usernameError.innerHTML='The User Name should at least 8 letters';
                usernameCorrect.innerHTML='';
                return false;
            } 


            usernameCorrect.innerHTML='&#9989;';
            usernameError.innerHTML='';
            return true;

         }

         function validatePassword(){
            var password= document.getElementById('Password').value;

            if(password.length==0){
                passwordError.innerHTML='The password is required';
                passwordCorrect.innerHTML='';
                return false;
            }

            if(password.length < 8){
                passwordError.innerHTML='The password should at least 8 characters';
                passwordCorrect.innerHTML='';
                return false;

            }

            passwordCorrect.innerHTML='&#9989;';
            passwordError.innerHTML='';
            return true;

         }

        

    function validateRegisterForm(){
        if (!validateName() || !validateBirth() || !validateEmail() || !validatePhone() || !validateStreet() || !validateCity() || !validateZip() || !validateUsername() || !validatePassword()){
            alert('Please fix your error. Thank you.');
            return false;
        }
        alert('Congralation! You have successed create a new account, click OK and back to login your account.');
        
        }

        function comfirmPassword(){
            var password1= document.getElementById('Password').value;
            var password2=document.getElementById('Password2').value;

            if(password2.length ==0){
                password2Error.innerHTML='The Password is required';
                return false;

            }

            if(password2!=password1){
                password2Error.innerHTML='Password did not match';
                return false;
            }
            password2Correct.innerHTML='&#9989;';
            password2Error.innerHTML='';
            return true;


         }
          function validatePasswordForm(){
           if (!validatePassword() || !comfirmPassword()){
            alert('Please fix your error. Thank you.');
            return false;
          }
          alert('Congralation! You have successed change a new password, click OK and back to login your account with your new password.');

        
        }

        function validatePersonalForm(){
        if (!validateName() || !validateBirth()){
            alert('Personal Information Change failure. Please change them with right format. Thank you. ');
            return false;
        }
        alert('You succeessful change your Personal Information! ');
        }
        function validateContactForm(){
        if (!validateEmail() || !validatePhone() || !validateStreet() || !validateCity() || !validateZip()){
            alert('Contact Information Change failure. Please change them with right format. Thank you. ');
            return false;
        }
        alert('You succeessful change your Contact Information! ');
        }

         function validateLoginUsername(){
            var username = document.getElementById('username').value;

            if(username.length ==0){
                usernameLoginError.innerHTML='The Username is required';
                usernameLoginCorrect.innerHTML='';
                return false;
            }

            usernameLoginCorrect.innerHTML='&#9989;';
            usernameLoginError.innerHTML='';
            return true;

         }

         function validateLoginPassword(){
            var password= document.getElementById('Password').value;

            if(password.length==0){
                passwordLoginError.innerHTML='The password is required';
                passwordLoginCorrect.innerHTML='';
                return false;
            }

            passwordLoginCorrect.innerHTML='&#9989;';
            passwordLoginError.innerHTML='';
            return false;

         }

         function validateLoginForm(){
        if ( !validateUsername() || !validatePassword()){
            return false;
        }
        }

        

    function Profile_add(){
       const  imgDiv = document.querySelector('[id="profile-border"]');
       const uploadBtn = document.querySelector('[id="uploadBtn"]');
       const PhotoChange = document.getElementById('photo_change');
       imgDiv.addEventListener('mouseenter', function(){
            uploadBtn.style.display = "block";

        } );

        imgDiv.addEventListener('mouseleave', function(){
            uploadBtn.style.display="none";
        });

}
 function ChangeFile(){
  const img = document.querySelector('#file');
    var uploaded_image=" ";
    img.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load",function(){
            uploaded_image=reader.result;
            document.getElementById("profile-photo"). src=uploaded_image;

        });
        reader.readAsDataURL(this.files[0]);
    });
}

