import React, { useState } from "react"; // Importing useState from React
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button> {/* Added onClick event and dynamic button text */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
