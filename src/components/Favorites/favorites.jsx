import React from "react";
import { connect } from "react-redux";
import Card  from "../card/Card";

export function Favorites({myFavorites, onClose}){
    return (
      <div>
        {myFavorites.map(char => (
            <Card
            id = {char.id}
            name={char.name} 
            species={char.species} 
            gender={char.gender} 
            image={char.image} 
            onClose= {() => onClose(char.id)}
            />
        ))}
      </div>
    )
}

export function mapStateToProps(state) {
    return {
       myFavorites : state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites) 