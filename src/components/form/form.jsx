import React from "react";
import styles from "./form.module.css"
import { validation } from "./validation";
import rmVideo from '../../assets/rick_landing.mp4'

export default function Form(props){

const [userData, setUserData] = React.useState({username:'', password:''});
const [errors, setErrors] = React.useState({username:'', password:''});
function handleInputChange(e){
    setUserData({...userData,[e.target.name]: e.target.value});
    setErrors(validation((
            {...userData,[e.target.name]: e.target.value}))
        )
}

function handleSubmit(e){
  e.preventDefault();
  props.login(userData);
}

return (
        <div >
            <form  onSubmit={handleSubmit}>
                <div>                  
                  <h3>Login Here</h3>
                  <label className={styles.normal} htmlFor = "username">Username:</label>
                  <input className={styles.input} id="username" name="username" placeholder="Enter the user..." type="text" 
                    value={userData.username} onChange={handleInputChange}/>
                  <p className={styles.error}>{errors.username}</p>
                </div>

                <div>
                  <label className={styles.normal} htmlFor = "password">Password:</label>
                  <input className={styles.Input} id="password" name="password" placeholder="Enter password..." type="password" value={userData.password}
                    onChange={handleInputChange}/>
                  <p className={styles.error}>{errors.password}</p>
                </div>                
                  <button className={styles.Btn} type="submit">Login</button>    
                  <div className={styles.social}>
                    <div className={styles.go}><i ></i>G Google</div>
                    <div className={styles.fb}><i ></i>ⓕ Facebook</div>
                  </div>            
            </form>
            <video src={rmVideo} autoplay="true" muted="true" loop="true" type="video/mp4"/>
        </div>
    );
}