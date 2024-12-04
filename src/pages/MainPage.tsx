import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AchievementManagement from '../components/leader/AchievementManagement';
import Achievements from '../components/public/Achievements';
import Dashboard from '../components/Dashboard';
import DataEntry from '../components/manager/DataEntry';
import DepartmentStats from '../components/public/DepartmentStats';
import { getDepartmentData } from '../components/public/DepartmentStats/utils';
import EmployeeManagement from '../components/leader/EmployeeManagement';
import EmployeeStats from '../components/public/EmployeeStats';
import Goals from '../components/public/Goals';
import Header from '../components/Header';
import LeaderProfile from '../components/LeaderProfiles';
import Reports from '../components/leader/Reports';
import Sidebar from '../components/Sidebar';
import StatisticsManagement from '../components/leader/StatisticsManagement';
import { UserRole } from '../types/types';
import OfferIdeas from '../components/manager/OfferIdeas';
import MyProfile from '../components/manager/MyProfile';
import MyStatistics from '../components/manager/MyStatistics';
import IdeasBlock from '../components/leader/IdeasBlock';
import GoalLeaderBlock from '../components/leader/GoalLeaderBlock';

const MainPage = () => {
    const [sortOption, setSortOption] = useState<'total-stats' | 'direction'>('total-stats'); // 'total-stats' по умолчанию
    const [filterOption, setFilterOption] = useState<string>('currentMonth'); // по умолчанию 'currentMonth'
    const [salesData, setSalesData] = useState<{ [key: string]: number[] }>({});
    const [customPeriod, setCustomPeriod] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });

    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser] = useState({
        id: '1',
        name: 'Marisa',
        role: UserRole.Manager,
    });

    // Обработчики фильтрации периода
    const handleFilterChange = (option: string) => {
        setFilterOption(option);
    };

    // Обработчик выбора периода
    const handleCustomPeriodSelect = (start: Date, end: Date) => {
        console.log('Выбранный период:', start, end);
        setCustomPeriod({ startDate: start, endDate: end });
        setFilterOption('customPeriod'); // Устанавливаем фильтр на кастомный период
    };
    // Обработчики сортировки по дате и по направлению, принимает параметр viewType, который указывает, какой тип сортировки выбран - отдел или сотрудники
    const handleSortByDate = (viewType: string) => handleSortChange(viewType, 'total-stats');
    const handleSortByDirection = (viewType: string) => handleSortChange(viewType, 'direction');

    // Функция отвечает за обновления состояния сортировки в компоненте и навигацию к соответствующему маршруту (отдел/сотрудники+дата/направление)
    const handleSortChange = (viewType: string, sortType: 'total-stats' | 'direction') => {
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
            setSortOption(sortParam as 'total-stats' | 'direction');
        }
    }, [location]);

    useEffect(() => {
        const fetchSalesData = () => {
            const data = getDepartmentData('total-stats', filterOption, customPeriod) as { [key: string]: number[] };
            setSalesData(data);
        };

        fetchSalesData();
    }, [filterOption, customPeriod]);

    return (
        <>
            <Header userRole={currentUser.role} filterOption={filterOption} onFilterChange={setFilterOption} onCustomPeriodSelect={handleCustomPeriodSelect} sortOption={sortOption} />
            <div className="main-content">
                <Sidebar userRole={currentUser.role} onSortByTotalStats={handleSortByDate} onSortByDirection={handleSortByDirection} />
                <main className="content">
                    <Routes>
                        {/* Пути для публичной части */}
                        <Route path="/" element={<Dashboard userRole={currentUser.role} salesData={salesData} filterOption={filterOption} />} />
                        <Route path="/department-statistics" element={<DepartmentStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />} />
                        <Route path="/employees-statistics" element={<EmployeeStats sortOption={sortOption} filterOption={filterOption} viewType={sortOption} />} />
                        <Route path="/goals" element={<Goals />} />
                        <Route path="/achievements" element={<Achievements userRole={currentUser.role} />} />
                        {/* Пути для админа */}
                        <Route path="/lk/statistics-management" element={<StatisticsManagement />} />
                        <Route path="/lk/goal-leader" element={<GoalLeaderBlock />} />
                        <Route path="/lk/achievement-management" element={<AchievementManagement userRole={currentUser.role} />} />
                        <Route path="/lk/employee-management" element={<EmployeeManagement />} />
                        <Route path="/lk/reports" element={<Reports />} />
                        <Route path="/lk/leader-profiles" element={<LeaderProfile userRole={currentUser.role} />} />
                        <Route path="/lk/ideas" element={<IdeasBlock />} />
                        {/* Пути для менеджера */}
                        <Route path="/lk/my-profile" element={<MyProfile userRole={currentUser.role} />} />
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
