import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom";
import styles from "./detail.module.css"

export default function Detail (props){
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
            <div className={styles.normal}>
                <hr/>
                <h1>{character.name}</h1>
                <hr/>
                <br/>
                <ul >
                    <li><h3>Gender: {character.gender}</h3></li><br/>
                    <li><h3>Origin: {character.origin?.name}</h3></li><br/>
                    <li><h3>Species: {character.species}</h3></li><br/>
                </ul>
                <img src={character.image} alt={character.name} />
            </div>
            <div>
                <hr/>
            <button className={styles.HomeButton} onClick={BackToHome}>Home</button>
            </div>
        </div>
    );
}