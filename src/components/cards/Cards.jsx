import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
  //const { characters, onClose } = props;
  
  return (
    <div className={styles.container}>
      {characters.map((char) => (
        <Card
          detailId={char.id}
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
}
