import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";

const App = () => {
  
  return (<div className='container'>
    <Counter>Hola soy un boton</Counter>
  </div>);
};

render(<App />, document.getElementById("root"));