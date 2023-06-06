import React, {useState} from 'react';


const Form = (props) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {

        e.preventDefault(); // This will prevent the default form submission setting from messing with our data. Very important.

        const newUser = {username, email, password};
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        console.log("No more user input in form lmao");

    };

    return(
        <form onSubmit = {createUser}>
            <div>
                <label>
                    Username:
                    <input type = "text" onChange = {(e) => setUsername(e.target.value)} value = {username}/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type = "text" onChange = {(e) => setEmail(e.target.value)} value = {email}/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type = "password" onChange = {(e) => setPassword(e.target.value)} value = {password}/>
                </label>
            </div>
            <input type = "submit" value = "Submit"/>
        </form>
    )
};

export default Form;