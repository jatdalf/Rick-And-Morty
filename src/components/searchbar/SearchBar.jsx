import styled from "styled-components";

export default function SearchBar(props) {
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
    &:hover {
      background-color: #ffd60a;
    }
  `;

  const { onSearch } = props;
  return (
    <DivSearch>
      <Input type="search" />
      <Btn onClick={() => onSearch("ID de personaje")}>Agregar</Btn>
    </DivSearch>
  );
}
