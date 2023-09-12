import { useState } from "react";
import "./App.css";

// const infoArray = ["Alex", "Isabella", "Clementine"];
const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  return (
    <div className="slide-container">
      <Slides></Slides>
    </div>
  );
}

function Slides() {
  const [increment, setIncrement] = useState(0);
  function nextSlide() {
    if (increment < images.length - 1) {
      setIncrement((inc) => inc + 1);
    }
  }

  function prevSlide() {
    if (increment > 0) {
      setIncrement((inc) => inc - 1);
    }
  }
  return (
    <div className="slide">
      <button onClick={prevSlide} className="btn">
        ⏮️
      </button>
      <img src={images.at(increment)} alt="nice images"></img>
      <button onClick={nextSlide} className="btn">
        ⏭️
      </button>
    </div>
  );
}

export default App;
