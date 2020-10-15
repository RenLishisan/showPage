import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Centre from './Centre'
import Page from './Page'

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Centre/>
        <Page/>
    </React.StrictMode>,
    document.getElementById('root')
);