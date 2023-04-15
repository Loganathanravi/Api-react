import "./SearchBar.css";
import { useState } from "react";
function SearchBar({onSubmit}){
    const [term,SetTerm]=useState("");
   const handleFormSubmit =(event)=>{
    event.preventDefault();
    onSubmit(term);
   };
   const handleChange=(event)=>{
    const type=event.target.value
    SetTerm(type);
    };

    return(
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
             <input value={term} type="text" onChange={handleChange}/>
             <button  type="submit">search</button>
        </form>
        </div>
    );
}

export default SearchBar;