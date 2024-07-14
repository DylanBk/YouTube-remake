import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
    return (
        <div className='App'>
            <Header />
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default App;