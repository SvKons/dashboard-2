import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import MainPage from './pages/MainPage';
import './reset.scss';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <MainPage />
            </div>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
