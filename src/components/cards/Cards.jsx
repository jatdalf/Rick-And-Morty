import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  //   console.log(characters);
  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
