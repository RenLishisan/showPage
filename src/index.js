import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/Header';
import Page from "./component/Page";
import './component/card.css'


ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <div className="centre">
            <Page/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);