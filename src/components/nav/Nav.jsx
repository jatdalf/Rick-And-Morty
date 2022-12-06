import React from "react";
import SearchBar from "../searchbar/SearchBar";



export default function Nav({onSearch}){
    return <div><SearchBar onSearch={onSearch}/></div>;
}
