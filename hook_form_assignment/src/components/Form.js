import React, {useState} from 'react';


const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [fError, setFError] = useState("");
    const [lError, setLError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordErr, setConfPassErr] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true);
    }

    const handleFirstName = (e) => {
        if(e.target.value.length < 1) {
            setFError("First name must not be empty");
        }
        else if(e.target.value.length < 2) {
            setFError("First name must have at least 2 characters");
        }
        else {
            setFError("");
        }
    }

    const handleLastName = (e) => {
        if(e.target.value.length < 1) {
            setLError("Last name must not be empty");
        }
        else if(e.target.value.length < 2) {
            setLError("Last name must have at least 2 characters");
        }
        else{
            setLError("");
        }
    }

    const handleEmail = (e) => {
        if(e.target.value.length < 1) {
            setEmailError("Email must not be empty");
        }
        else if(e.target.value.length < 3) {
            setEmailError("Email must have at least 3 characters");
        }
        else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        if(e.target.value.length < 1) {
            setPasswordError("Password must not be empty");
        }
        else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfPass = (e) => {
        if(e.target.value.length < 1) {
            setConfPassErr("Confirm Password is required");
        }
        else if(e.target.value.length < 8) {
            setConfPassErr("Confirm Password must be at least 8 characters");
        }
        else {
            setConfPassErr("");
        }
    }

    //? The logic used to achieve the same goal of conditional rendering without the use of ternary operators as seen inside of form
    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting your form!"
    //     }
    //     else {
    //         return "Welcome, please submit the form."
    //     }
    // }

    return(
        <div>
            
            <form onSubmit = {(e) => e.preventDefault()}>
                { hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3>:
                <h3>Welcome, please submit the form below.</h3> }
                <div>
                    <label>
                        First Name:
                        <input type = "text" onChange = {handleFirstName}/>
                        {
                        fError ?
                        <p>{fError}</p>:
                        ''
                        }           
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type = "text" onChange = {handleLastName}/>
                        {
                        lError?
                        <p>{lError}</p>:
                        ''
                        }
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type = "email" onChange = {handleEmail}/>
                        {
                        emailError?
                        <p>{emailError}</p>:
                        ''
                        }
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type = "password" onChange = {handlePassword}/>
                        {
                        passwordError?
                        <p>{passwordError}</p>:
                        ''
                        }
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input type = "password" onChange = {handleConfPass}/>
                        {
                        confirmPasswordErr?
                        <p>{confirmPasswordErr}</p>:
                        ''
                        }
                    </label>
                </div>
                <input type = "submit" value = "Submit"/>
            </form>
                {
                    <div>
                        <h3>{firstName}</h3>
                        <h3>{lastName}</h3>
                        <h3>{email}</h3>
                        <h3>{password}</h3>
                        <h3>{confirmPassword}</h3>
                    </div>
                }

        </div>
    )
}
export default Form;


