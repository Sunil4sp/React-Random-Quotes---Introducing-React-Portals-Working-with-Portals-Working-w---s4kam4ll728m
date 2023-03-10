import React, { useState, useEffect } from "react";
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {

  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState(0);

  /* useEffect(() =>{
    /* document.body.style.backgroundColor = color; 
    changeDivColor(color);
  },[color]); */

  const getQuote = () =>{
    fetch('https://api.quotable.io/random')
    .then(res=> res.json())
    .then(data=>{
      setContent(data.content);
      setAuthor(data.author);
      /* changeDivColor(color); */
    })
  }
  const changeDivColor = () =>{
    setColor(colors[color]);
    document.body.style.backgroundColor = colors[color];
  }

    return (
      <div id="main">
        <div id="wrapper">
          <div className="quote-text">{content}</div>
          <div className="quote-author">{author}</div>
          <button id="new-quote" onClick={getQuote}>Fetch Quote</button>
        </div>
      </div>
    );
};

export default App;
