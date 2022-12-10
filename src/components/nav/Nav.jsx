import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link, useLocation } from 'react-router-dom';
import styles from "./Nav.module.css";


export default function Nav({onSearch, logOut}){
    const location = useLocation();

    return (
    <div className={styles.nav}> 
       <div> {/* Home */}
           {location.pathname === "/home" && 
           <button><Link to = "/favorites" >Favorites</Link></button>}
           {location.pathname === "/home" &&
            <button><Link to = "/about" >About</Link></button>}
           {location.pathname === "/home" &&
            <button onClick={logOut} >LogOut</button>}       
        </div>
        <div> {/* About */}
            {location.pathname === "/about" &&
             <button><Link to = "/favorites" >Favorites</Link></button>}
            {location.pathname === "/about" &&
             <button onClick={logOut}>LogOut</button>}       
        </div>
        <div> {/* Detail */}      
            {location.pathname === "/detail" &&
             <button><Link to = "/favorites" >Favorites</Link> </button>}
            {location.pathname === "/detail" &&
             <button><Link to = "/about" >About</Link></button>}
            {location.pathname === "/detail" &&
             <button onClick={logOut}>LogOut</button>}       
        </div>
        <div> {/* Favorites */}      
            {location.pathname === "/favorites" &&
             <button><Link to = "/about">About</Link></button>}
            {location.pathname === "/favorites" &&
             <button><Link to = "/home">Home</Link></button>}
            {location.pathname === "/favorites" &&
             <button onClick={logOut} >LogOut</button>}     
        </div>               
        {/* <Link to="/home">Home</Link>
        <br/>
        <Link to="/about">About</Link> */}
        {location.pathname === "/home" && <SearchBar onSearch={onSearch}/>}
    </div>
    );
}
