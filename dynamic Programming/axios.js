const axios = require('axios').default;

const getData = () => {
    axios.get('https://reqres.in/api/users')
    .then( response => {
        console.log(response.data);
    }).catch( error => {
        console.log("ERROR!!!!", error)
    });
}

const sendData = () => {
    let dataRequest = {
        email: 'eve.holt@reqres.in',
        //password: 'pistol'
    }
    axios.post('https://reqres.in/api/register', dataRequest)
    .then( response => {
        console.log(response.data)
    }).catch( error => {
        console.log(error);
    })
}
//getData()
sendData()