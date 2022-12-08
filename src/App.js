import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import { useState, useEffect } from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx"
import Form from "./components/form/form";


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
   }
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
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
 }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      </div>
      <hr></hr>
     
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>    
      
    </div>
  );
}

export default App;
