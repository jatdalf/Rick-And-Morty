import React from 'react'
import styles from "./error404.module.css"
import {useNavigate} from "react-router-dom";


export default function Form() {
    const navigate = useNavigate();
    const BackToHome = () => navigate("/home");

  return(
    <div >
		<div className={styles.space}/>
		<div className={styles.wrapper}>
			<div className={styles.wrapper}>
				<span>44</span>
		    </div>
			<p>The page you are trying to search has been <br/> moved to another universe.</p>
			<button onClick={BackToHome} type="button">GET ME HOME</button>
        </div>
	</div>    
    )
}