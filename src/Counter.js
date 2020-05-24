import React, { useState } from 'react';
import Btn from './Btn'
import 'semantic-ui-css/semantic.min.css'

const Counter = props => {
    const [counter, setCounter] = useState(0);
    
    function sumarCinco() {
      setCounter(counter + 5)
    }
    return (<p>
        {counter}
        <Btn funcion ={sumarCinco}> {props.children} </Btn>
    </p>);
}

export default Counter;