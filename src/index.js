import React from "react";
import { render } from "react-dom";
import Counter from "./counter";

const App = () => {
  
  return (<div className='container'>
    <Counter>Hola soy un boton</Counter>
  </div>);
};

render(<App />, document.getElementById("root"));