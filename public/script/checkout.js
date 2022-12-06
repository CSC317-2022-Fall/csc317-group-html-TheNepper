const fname = document.getElementById('name')
const lname = document.getElementById('lname')
const email =  document.getElementById('email')
const phone =  document.getElementById('phone')
const address =  document.getElementById('address')
const city =  document.getElementById('city')
const state =  document.getElementById('state')
const  zipcode =  document.getElementById('zipcode')



const baseUrl = 'http://localhost:8080/accountinput'

async function filledInputFilled(e){
    const res  = await fetch(baseUrl,
    {
        method: 'GET'
    })

    console.log(res);
    const data = await res.json();
    const [first, last] = data.name.split(' ');
    fname.value = first;
    lname.value = last;
    email.value = data.email;
    phone.value = data.phone;
    address.value= data.streetaddress;
    city.value = data.city;
    state.value = data.state;
    zipcode.value = data.zipcode;
    

  
    }