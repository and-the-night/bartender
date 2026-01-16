import sours from '../src/sours.json';
import creamDrinks from '../src/cream-drinks.json';
import martinis from '../src/martinis.json';
import twoLiquor from '../src/two-liquor.json';
import highballs1 from '../src/highballs-1.json';
import { useState } from 'react';
import './App.css';

function App() {
  const [randomDrink, setRandomDrink] = useState(null);
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    'Cream Drinks': false,
    'Martinis': false,
    'Sours': false,
    'Two Liquor': false,
    'Highballs 1': false
  });

  const drinks = [];

  Object.keys(selectedCategories).forEach((category) => {
    if (selectedCategories[category]) {
      switch (category) {
        case 'Cream Drinks':
          drinks.push(...creamDrinks);
          break;
        case 'Martinis':
          drinks.push(...martinis);
          break;
        case 'Sours':
          drinks.push(...sours);
          break;
        case 'Two Liquor':
          drinks.push(...twoLiquor);
          break;
        case 'Highballs 1':
          drinks.push(...highballs1);
          break;
        default:
          break;
      }
    }
  });

  const getRandomDrink = () => {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    setRandomDrink(drinks[randomIndex]);
    setShowIngredients(false);
  };

  return (
    <div className="App">
      <h1>Bartender App</h1>
      <div className='radios-wrapper'>
        {Object.keys(selectedCategories).map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories[category]}
              onChange={() =>
                setSelectedCategories({
                  ...selectedCategories,
                  [category]: !selectedCategories[category]
                })
              }
            />
            {category}
          </label>
        ))}
      </div>
      <div className='buttons-wrapper'>
        <button onClick={getRandomDrink}>New Random Drink</button>
        <button onClick={() => setShowIngredients(!showIngredients)}>
          {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
        </button>
      </div>
      {randomDrink && (
        <div>
          <h2>{randomDrink.name}</h2>
          {showIngredients && (
            <ul>
              {randomDrink.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          )}
          {randomDrink.img && (<img src={randomDrink.img} alt={randomDrink.name} className='drink-image'/>)}
        </div>
      )}
    </div>
  );
}

export default App;


