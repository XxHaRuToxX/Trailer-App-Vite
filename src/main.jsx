import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { SearchProvider } from './contexts/SearchContext';
import { ToggleProvider } from './contexts/ToggleContext';
import './index.css';
import ReloadPrompt from './ReloadPrompt';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToggleProvider>
            <SearchProvider>
                <BrowserRouter>
                    <ReloadPrompt/>
                    <App />
                </BrowserRouter>
            </SearchProvider>
        </ToggleProvider>
    </React.StrictMode>
)
