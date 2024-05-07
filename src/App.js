import { useState } from "react";
import "./App.css";
import sunIcon from "./assets/sun.png";
import moonIcon from "./assets/moon.png";
function App() {

  const [isDarkMode, SetIsDarkMode] = useState(false);

  return (
    <div className="app">
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => SetIsDarkMode(!isDarkMode)}
          >
            <div className="app_calculator_navbar_toggle_circle"></div>
            <img src={isDarkMode ? sunIcon : moonIcon} alt="mode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
