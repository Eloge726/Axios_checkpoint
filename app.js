const axios =require('axios')
const requetone=axios.get('https://dog.ceo/api/breeds/list/all')
const requestTwo=axios.get('https://jsonplaceholder.typicode.com/users')
axios
.all([requetone, requestTwo])
.then(axios.spread((responseone,responsetwo)=>
    {console.log(responseone.data),
    console.log(responsetwo.data)
    })
)
.catch(er=>console.log(er))