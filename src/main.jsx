import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HiWorldApp } from './HiWorldApp';
import { FirstApp } from './firstApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>
);