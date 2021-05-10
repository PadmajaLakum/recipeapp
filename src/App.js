import React, {useState,useEffect} from "react";
import Recipe from './Recipe.';
import './style.css';

const App = () => {

  const APP_ID="1230be33";
  const APP_KEY=
  "ed40b3caceca026e7a147883042815a9";	
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('cheesecake');
  useEffect(() => { getRecipes();},[query]);  //eslint-disable-line 
  // getting API information from EDAMAM 
  const getRecipes= async () => {
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  }
const updateSearch= e => {
  setSearch(e.target.value);
}
const getSearch =e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
return(
  <div className="App">
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar"  value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> search</button>
        </form>
           <div className='recipes'>
            {recipes.map(recipe => (
              <Recipe key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
            )
            )
          }
          </div>
   
     </div>
)
        }

export default App;




