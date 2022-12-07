import styles from "./Card.module.css";
import {Link} from "react-router-dom";

export default function Card(props) {
  //   console.log(props);
  return (
    <div className={styles.card}>
      <button onClick={props.onClose}>X</button>
      <Link to={`/detail/${props.detailId}`}><h2>{props.name}</h2></Link>      
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
