import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AchievementManagement from '../components/AchievementManagement';
import Achievements from '../components/Achievements';
import Dashboard from '../components/Dashboard';
import DataEntry from '../components/DataEntry';
import DepartmentStats from '../components/DepartmentStats';
import EmployeeManagement from '../components/EmployeeManagement';
import EmployeeStats from '../components/EmployeeStats';
import GoalManagement from '../components/GoalManagement';
import Goals from '../components/Goals';
import Header from '../components/Header';
import Ideas from '../components/Ideas';
import Profiles from '../components/Profiles';
import Reports from '../components/Reports';
import Sidebar from '../components/Sidebar';
import StatisticsManagement from '../components/StatisticsManagement';
import { UserRole } from '../types/UserRole';

const MainPage = () => {
    const [sortOption, setSortOption] = useState<'date' | 'direction'>('date'); // 'date' по умолчанию
    const [filterOption, setFilterOption] = useState<string>('currentMonth'); // по умолчанию 'currentMonth'
    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser] = useState({
        id: '1',
        name: 'Marisa',
        role: UserRole.Manager,
    });

    // Обработчики фильтрации
    const handleFilterChange = (option: string) => {
        setFilterOption(option);
    };

    const handleCustomPeriodSelect = (start: Date, end: Date) => {
        console.log('Выбранный период:', start, end);
    };

    // Обработчики сортировки
    const handleSortByDate = (viewType: string) => handleSortChange(viewType, 'date');
    const handleSortByDirection = (viewType: string) => handleSortChange(viewType, 'direction');

    const handleSortChange = (viewType: string, sortType: 'date' | 'direction') => {
        setSortOption(sortType);
        navigate(`/${viewType}-statistics?sort=${sortType}`);
    };

    useEffect(() => {
        // Обновляем filterOption на "Текущий месяц" по умолчанию при первом рендере
        if (!filterOption) {
            setFilterOption('currentMonth');
        }
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sortParam = queryParams.get('sort');
        if (sortParam) {
            setSortOption(sortParam as 'date' | 'direction');
        }
    }, [location]);

    return (
        <>
            <Header sortOption={sortOption} filterOption={filterOption} onFilterChange={setFilterOption} onCustomPeriodSelect={handleCustomPeriodSelect} />
            <div className="main-content">
                <Sidebar
                    userRole={currentUser.role}
                    onSortByDate={viewType => handleSortChange(viewType, 'date')}
                    onSortByDirection={viewType => handleSortChange(viewType, 'direction')}
                />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route
                            path="/department-statistics"
                            element={<DepartmentStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />}
                        />
                        <Route
                            path="/employees-statistics"
                            element={<EmployeeStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />}
                        />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/lk/statistics-management" element={<StatisticsManagement />} />
                        <Route path="/lk/data-entry" element={<DataEntry />} />
                        <Route path="/lk/reports" element={<Reports />} />
                        <Route path="/lk/profiles" element={<Profiles />} />
                        <Route path="/lk/ideas" element={<Ideas />} />
                        <Route path="/lk/goal-management" element={<GoalManagement />} />
                        <Route path="/lk/employee-management" element={<EmployeeManagement />} />
                        <Route path="/lk/achievement-management" element={<AchievementManagement />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default MainPage;
