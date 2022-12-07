import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";

export default function Detail (){
    const {detailId} = useParams ();
    const [character, setCharacter] = useState ({});
    const navigate = useNavigate();
    const BackToHome = () => navigate("/home");

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    return (
        <div>
            <div>
                <h1>Name: {character.name}</h1>
                <h4>Gender: {character.gender}</h4>
                <h4>Origin: {character.origin?.name}</h4>
                <h4>Species: {character.species}</h4>
            </div>
            <div>
                <hr/>
            <button onClick={BackToHome}>Home</button>
            </div>
        </div>
    );
}