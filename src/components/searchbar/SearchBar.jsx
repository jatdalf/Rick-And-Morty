import { useState } from "react";
import styled from "styled-components";

const DivSearch = styled.div`
padding: 1em;
display: flex;
justify-content: center;
`;

const Btn = styled.button`
border-radius: 0.5em;
margin-left: 0.5em;
padding: 0.5em;
border: solid #06d6a0;
color: #370617;
font-weight: 700;
font-size: 1em;
background: linear-gradient(0deg, rgba(7, 241, 38, 0.795) 0%, rgb(182, 245, 9) 100%);
width: 150px;
height: 50px;
&:hover {
  background-color: #ffd60a;
  cursor: pointer;
}
`;

const Input = styled.input`
border-radius: 0.5em;
margin-left: 0.5em;
padding: 0.5em;
border: solid #06d6a0;
color: #370617;
font-weight: 700;
font-size: 1em;
background-color: white;
&:hover {
  background-color: #ffd60a;
}
`;



export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  const handleChange = (evento) => {
    setCharacter(evento.target.value)
  }


  return (
    <DivSearch >
      <Input  type="number" placeholder="Type char Id" value ={character} onChange={handleChange}/>
      <Btn onClick={()=> onSearch(character)}>Add char</Btn>
      <Btn onClick={()=> onSearch(Math.floor(Math.random()*826))}>Random Char</Btn>
    </DivSearch>    
  );
}
