import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigation = useNavigate()
    const [inputs, setInputs] = useState({})

    let handleChanges = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    let handleSubmit = (event) => {
        validation()
        event.preventDefault()
    }

    let directSignup = () => {
        navigation('/')
    }
    
    let validation = () => {
        let isLogged = false

        let email = inputs.email
        let password =  inputs.password

        let array = getJsonData()
        for (let i = 0; i < array.length; i++) {
            console.log( array[i].email)
            console.log(email)

            if (email === array[i].email && password === array[i].password) {
                navigation('/Todo')
                isLogged = true
            }
        }
        if (!isLogged) {
            alert('Email (or) password invalid')
        }
    }

    let getJsonData = () => {
        let value = JSON.parse(localStorage.getItem('React-Todo-Application'))
        return value
    }

    return (
        <div className="Container">
            <div className="frm-Container">
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter the E-mail'
                        onChange={handleChanges}
                        value={inputs.email}
                    /><br></br>

                    <input
                        type='password'
                        name='password'
                        placeholder='Enter the Password'
                        onChange={handleChanges}
                        value={inputs.password}
                    /><br></br>

                    <button type="submit" onClick={handleSubmit} className="main-btn">Login</button>
                    <button type="button" onClick={directSignup} className="alt-btn">New to this Webpage</button>
                </form>
            </div>
        </div>
    )
}

export default Login