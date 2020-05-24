import React, { useState } from 'react';
import Btn from './Btn'
import 'semantic-ui-css/semantic.min.css'

const Counter = props => {
    const [counter, setCounter] = useState(0);
    
    function sumarCinco() {
      setCounter(counter + 5)
    }
    return (<div>
        {counter}
        <Btn funcion={sumarCinco}> {props.children} </Btn>
    </div>);
}

export default Counter;