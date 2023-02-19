import React from 'react'
import NavBar from './NavBar'
import {useState} from 'react'

function Header() {
    


    

    return (
        <div id="header">
            <NavBar/>
        </div>
    )
}

export default Header

// function signUpFormSubmitHandler (e) {

//     e.preventDefault()

//     fetch('http://localhost:9292/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({username: newUser, password: newUserPassword})
//     })
//     .then(res=>res.json())
//     .then()
// }



