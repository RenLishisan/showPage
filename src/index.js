import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/header';
import Page from "./component/page";
import './component/component/card.css'


ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <div className="centre">
            <Page/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);