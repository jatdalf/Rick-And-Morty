import React from "react";
import styles from "./form.module.css"
import { validation } from "./validation";

export default function Form(props){

const [userData, setUserData] = React.useState({username:'', password:''});
const [errors, setErrors] = React.useState({username:'', password:''});
function handleInputChange(e){
    setUserData({...userData,[e.target.name]: e.target.value});
    //setErrors.validation({...userData,[e.target.name]: e.target.value});
    setErrors(
        validation((
            {...userData,[e.target.name]: e.target.value}))
        )
}

const handleSubmit = () => {
    props.loguin(userData);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor = "username">Username:</label>
                  <input id="username" name="username" placeholder="Ingrese el usuario..." type="text" 
                    value={userData.username} onChange={handleInputChange}/>
                  <p className="styles.error">{errors.username}</p>
                </div>

                <div>
                  <label htmlFor = "password">Password:</label>
                  <input id="password" name="password" type="password" value={userData.password}
                    onChange={handleInputChange}/>
                  <p>{errors.password}</p>
                </div>

                  <input type="submit"></input>                
            </form>
        </div>
    );
}