const name = document.getElementById('name')
const birthday = document.getElementById('birthday')
const email =  document.getElementById('email')
const phone =  document.getElementById('phone')
const streetaddress =  document.getElementById('streetaddress')
const city =  document.getElementById('city')
const state =  document.getElementById('state')
const  zipcode =  document.getElementById('zipcode')
const username =   document.getElementById('username')
const password = document.getElementById('Password')
const profile = document.getElementById("profile-photo")



const baseUrl = 'http://localhost:8080/accountinput'



                          

 async function filledInputFilled(e){
    const res  = await fetch(baseUrl,
    {
        method: 'GET'
    })

    console.log(res);
    const data = await res.json();
    name.value = data.name;
    birthday.value = data.birthday;
    email.value = data.email;
    phone.value = data.phone;
    streetaddress.value= data.streetaddress;
    city.value = data.city;
    state.value = data.state;
    zipcode.value = data.zipcode;
    username.value = data.username;

  
    }
    
	 


