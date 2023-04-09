import usestate from "react";

function SearchBar({onSubmit}){
    const [term,SetTerm]=usestate("");
   const handleFormSubmit =(event)=>{
    event.preventDefault();
    onSubmit("cars");
   };
   const handleChange=(event)=>{
    SetTerm(event.target.value);
    };

    return(<div>
        <form onSubmit={handleFormSubmit}>
             <input onChange={handleChange}/>
        </form>
        </div>
    );
}

export default SearchBar;