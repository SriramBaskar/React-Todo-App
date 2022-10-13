import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigation = useNavigate()
    const [inputs, setInputs] = useState({})

    let handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    let handleSubmit = (event) => {
        validation()
        event.preventDefault()
    }

    let directLogin = (event) => {
        navigation('/login')
        event.preventDefault()
    }

    let validation = () => {
        addData()
        navigation('/login')
        refresh()     
    }

    let addData = () => {
        console.log(inputs)
        let array = getJsonData()
        if(array !== ''){
            if (array == null) {
                let field = [inputs]
                setJsonData(field)
            } else {
                array.push(inputs)
                setJsonData(array)
            }
        }else{
            alert('Enter the field')
        }
    }

    function refresh() {
        inputs.userName = ''
        inputs.email = ''
        inputs.password = ''
    }

    let getJsonData = () => {
        let value = JSON.parse(localStorage.getItem('React-Todo-Application'))
        return value
    }

    let setJsonData = (value) => {
        localStorage.setItem('React-Todo-Application', JSON.stringify(value))
    }

    return (
        <div className="Container">
            <div className="frm-Container">
                <form>
                    <input
                        type='text'
                        name='userName'
                        placeholder='Enter the Name'
                        onChange={handleChanges}
                        value={inputs.userName}
                    /><br></br>

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

                    <button type="submit" onClick={handleSubmit} className="main-btn">Sign-Up</button>
                    <button type="button" onClick={directLogin} className="alt-btn">Already having the account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp