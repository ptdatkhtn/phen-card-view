import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { startSession } from '@sangre-fp/connectors/session'
import {DataProvider} from "./store/GlobalState";

const renderApp = (
    votingURL
  ) => {
    
    const params = votingURL.split('/');
    console.log('params[3]', params[3] === null || params[3] === 'null')
    if (params[3] === null || params[3] === 'null') {
        params[3] = null
    }
        return (
        <React.StrictMode>
            <DataProvider gid={params[2]} rid={params[3]} pid={params[4]}>
                <App  
                gid={params[2]}
                rid={params[3]}
                pid={params[4]}   
                />
            </DataProvider>
           
            
        </React.StrictMode>
    )
  }

startSession().then(() => {
    const appElements = document.getElementsByClassName("phen-card-app")

    const defaultRadarId = (/node=\d+/.test(document.location.href) && document.location.href.replace(/^.*node=(\d+).*$/, '$1')) || null

    for (let el of appElements) {
        ReactDOM.render(
            renderApp(
                el.hasAttribute('data-uri') ? el.getAttribute('data-uri') : defaultRadarId,
            ),
            el
        )
    }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
