
import SearchBar from "./components/SearchBar";


function App(){
    const handleSubmit=(term) => {
console.log(" Do a search with", term);
    };
    
    return(
    <div>
        <SearchBar onSubmit={handleSubmit}/>
         <h1>fgsfsfff</h1>

    </div>
    );
}
export default App; 