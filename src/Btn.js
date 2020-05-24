import React from 'react';
import 'semantic-ui-css/semantic.min.css'

const Btn = props => {
    const { children, funcion } = props;
        
    return (<div className= 'container'>
        <button className = 'ui button' onClick={funcion}> {children} </button>
    </div>);
}

export default Btn;  