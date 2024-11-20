import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AchievementManagement from '../components/AchievementManagement';
import Achievements from '../components/Achievements';
import Dashboard from '../components/Dashboard';
import DataEntry from '../components/DataEntry';
import DepartmentStats from '../components/DepartmentStats';
import { getDepartmentData } from '../components/DepartmentStats/utils';
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
import { UserRole } from '../types/types';
import OfferIdeas from '../components/OfferIdeas';
import MyProfile from '../components/MyProfile';
import MyStatistics from '../components/MyStatistics';

const MainPage = () => {
    const [sortOption, setSortOption] = useState<'date' | 'direction'>('date'); // 'date' по умолчанию
    const [filterOption, setFilterOption] = useState<string>('currentMonth'); // по умолчанию 'currentMonth'
    const [salesData, setSalesData] = useState<{ [key: string]: number[] }>({});
    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser] = useState({
        id: '1',
        name: 'Marisa',
        role: UserRole.Leader,
    });

    // Обработчики фильтрации периода
    // const handleFilterChange = (option: string) => {
    //     setFilterOption(option);
    // };

    // Обработчик выбора периода (НЕ РЕАЛИЗОВАНО), можно просто выбрать период в календаре
    const handleCustomPeriodSelect = (start: Date, end: Date) => {
        console.log('Выбранный период:', start, end);
    };

    // Обработчики сортировки по дате и по направлению, принимает параметр viewType, который указывает, какой тип сортировки выбран - отдел или сотрудники
    const handleSortByDate = (viewType: string) => handleSortChange(viewType, 'date');
    const handleSortByDirection = (viewType: string) => handleSortChange(viewType, 'direction');

    // Функция отвечает за обновления состояния сортировки в компоненте и навигацию к соответствующему маршруту (отдел/сотрудники+дата/направление)
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

    useEffect(() => {
        const fetchSalesData = () => {
            const data = getDepartmentData('date', filterOption) as { [key: string]: number[] };
            setSalesData(data);
        };

        fetchSalesData();
    }, [filterOption]);

    return (
        <>
            <Header userRole={currentUser.role} filterOption={filterOption} onFilterChange={setFilterOption} onCustomPeriodSelect={handleCustomPeriodSelect} />
            <div className="main-content">
                <Sidebar userRole={currentUser.role} onSortByDate={handleSortByDate} onSortByDirection={handleSortByDirection} />
                <main className="content">
                    <Routes>
                        {/* Пути для публичной части */}
                        <Route path="/" element={<Dashboard userRole={currentUser.role} salesData={salesData} filterOption={filterOption} />} />
                        <Route path="/department-statistics" element={<DepartmentStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />} />
                        <Route path="/employees-statistics" element={<EmployeeStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/achievements" element={<Achievements />} />
                        {/* Пути для админа */}
                        <Route path="/lk/statistics-management" element={<StatisticsManagement />} />
                        <Route path="/lk/goal-management" element={<GoalManagement />} />
                        <Route path="/lk/achievement-management" element={<AchievementManagement />} />
                        <Route path="/lk/employee-management" element={<EmployeeManagement />} />
                        <Route path="/lk/reports" element={<Reports />} />
                        <Route path="/lk/profiles" element={<Profiles />} />
                        <Route path="/lk/ideas" element={<Ideas />} />
                        {/* Пути для менеджера */}
                        <Route path="/lk/my-profile" element={<MyProfile />} />
                        <Route path="/lk/offer-ideas" element={<OfferIdeas />} />
                        <Route path="/lk/my-statistics" element={<MyStatistics />} />
                        <Route path="/lk/data-entry" element={<DataEntry />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

export default MainPage;
