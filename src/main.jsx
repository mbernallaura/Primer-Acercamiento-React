import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HiWorldApp } from './HiWorldApp';
//import { FirstApp } from './firstApp';
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 12 }/>
        {/* <FirstApp title='Hola soy Vegeta'/> */}
    </React.StrictMode>
);