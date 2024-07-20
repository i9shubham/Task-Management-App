import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/index.js';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <BrowserRouter basename='/'>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>
);
