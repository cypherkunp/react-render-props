import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Mouse from './components/mouse/mouse.component';
import Cat from './components/cat/cat.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h2> Render Props Pattern</h2>
            </header>
            <main className="app-body">
                <h1>Move the mouse around!</h1>
                <Mouse render={coordinates => <Cat mouse={coordinates} />} />
            </main>
        </div>
    );
}

export default App;
