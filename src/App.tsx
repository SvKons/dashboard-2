import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DepartmentStats from './components/DepartmentStats';
import EmployeeStats from './components/EmployeeStats';
import Goals from './components/Goals';
import Achievements from './components/Achievements';
import './reset.scss';
import './index.scss';

const App: React.FC = () => {
    const [sortOption, setSortOption] = useState<string | null>(null);

    const handleSortByDate = () => setSortOption('date');
    const handleSortByDirection = () => setSortOption('direction');

    return (
        <Router>
            <div className="app">
                <Header sortOption={sortOption} />
                <div className="main-content">
                    <Sidebar onSortByDate={handleSortByDate} onSortByDirection={handleSortByDirection} />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/statistika" element={<DepartmentStats />} />
                            <Route path="/uchastniki" element={<EmployeeStats />} />
                            <Route path="/tseli" element={<Goals />} />
                            <Route path="/dostizheniya" element={<Achievements />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;
