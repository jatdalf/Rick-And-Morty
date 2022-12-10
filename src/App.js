import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/form";
import Error404 from "./components/Error404/error404";
import Favorites from "./components/Favorites/favorites";

import React from "react";
import { useState, useEffect } from "react";
import {Routes, Route, useLocation, useNavigate, Navigate} from "react-router-dom";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

//simulador de seguridad
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
 }else{window.alert("invalid username or password")}
}
function logOut(){
  setAccess(false);
  navigate('/');
}
//Fin simulador de seguridad

//App.js
useEffect(() => {
  !access && navigate('/');
}, [access]);


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('Character id not found');
          }
       });
 }

//  const onClose = (id) => {
//     setCharacters(characters.filter(char => char.id !== id))
//  }
function onClose(id){
  setCharacters(oldChars => oldChars.filter(character => character.id !== id))
}


  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}/>}
      </div>
      <hr></hr>
     
      <Routes>
        <Route exact path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
        <Route path="/favorites" element = {<Favorites/>}/>
        <Route path="/Error404" element = {<Error404/>}/>
        <Route path= "*" element = {<Navigate to ="/Error404" />}/>
      </Routes>          
    </div>
  );
}

export default App;
