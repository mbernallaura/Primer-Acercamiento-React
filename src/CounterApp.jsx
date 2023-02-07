import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) =>{
    
    //!Cuando el estado (useState) cambia, vulve y carga la funcion CounterApp
    const [counter, setCounter] = useState( value );

    const incremento = () => {
        //!De ambas maneras se puede hacer
        //setCounter((c) => c + 1 );
        setCounter( counter + 1);
    }

    const decremento = () => setCounter(counter - 1);
    

    const reset = () => setCounter(value);
    

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ incremento }> +1 </button>
            <button onClick={ decremento }> -1 </button>
            <button aria-label='btn-reset' onClick={ reset }> Reset </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

