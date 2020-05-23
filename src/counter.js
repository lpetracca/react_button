import React, { useState } from 'react';
import Btn from './btn'
import 'semantic-ui-css/semantic.min.css'

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    
    function sumarCinco() {
      setCounter(counter + 5)
    }
    return (<p>
        {counter}
        <Btn onClick={sumarCinco}> {props.children} </Btn>
    </p>);
}

export default Counter;