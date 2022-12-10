import styles from "./Card.module.css";
import {Link} from "react-router-dom";
import {React, useState, useEffect} from "react";
import {addFavorites, deleteFavorites} from "../../redux/actions/actions"
import { connect } from "react-redux";

export function Card(props) {
  const [isFavorite, setisFavorite] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((favorite) => {
       if (favorite.id === props.id) {
        setisFavorite(true);
       };
    });
  }, [props.myFavorites,props.id]);

  function handleFavorite () {
    if(isFavorite){
      setisFavorite(false);
       props.deleteFavorites(props.id)
    }else{
      setisFavorite(true);
       props.addFavorites(props)
    }
  }


  return (
    <div className={styles.card}>
      { 
        !isFavorite ? (<button onClick={handleFavorite}>🤍</button>)
        :(<button onClick={handleFavorite}>❤️</button>)
      }
      <button onClick={props.onClose}>X</button>
      <br/>
      <Link to={`/detail/${props.detailId}`}><h2>{props.name}</h2></Link>      
      {/* <h2>{props.species}</h2>
      <h2>{props.gender}</h2> */}
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export function mapDispatchToProps(dispatch){
  return {
      addFavorites: function(character){
      dispatch(addFavorites(character))
     },       
      deteleFavorite: function(id){
      dispatch(deleteFavorites(id))
     }
  }
}

export function mapStateToProps(state) {
     return {myFavorites: state.myFavorites}
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)
