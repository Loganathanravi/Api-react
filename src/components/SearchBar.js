import { useState } from "react";
function SearchBar({onSubmit}){
    const [term,SetTerm]=useState("");
   const handleFormSubmit =(event)=>{
    event.preventDefault();
    onSubmit("cars");
   };
   const handleChange=(event)=>{
    SetTerm(event.target.value);
    };

    return(<div>
        <form onSubmit={handleFormSubmit}>
             <input value={term} onChange={handleChange}/>
        </form>
        </div>
    );
}

export default SearchBar;