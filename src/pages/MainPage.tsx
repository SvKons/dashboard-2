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

const allPaths = [
    '/',
    '/department-statistics?sort=total-stats&filter=currentMonth',
    '/department-statistics?sort=total-stats&filter=prevMonth',
    '/department-statistics?sort=total-stats&filter=nextMonth',
    '/department-statistics?sort=direction&filter=currentMonth',
    '/department-statistics?sort=direction&filter=prevMonth',
    '/department-statistics?sort=direction&filter=nextMonth',
    '/employees-statistics?sort=total-stats&filter=currentMonth',
    '/employees-statistics?sort=total-stats&filter=prevMonth',
    '/employees-statistics?sort=total-stats&filter=nextMonth',
    '/employees-statistics?sort=direction&filter=currentMonth',
    '/employees-statistics?sort=direction&filter=prevMonth',
    '/employees-statistics?sort=direction&filter=nextMonth',
    '/goals',
    '/achievements',
];

const MainPage = () => {
    const [sortOption, setSortOption] = useState<'total-stats' | 'direction'>('total-stats'); // 'total-stats' по умолчанию
    const [filterOption, setFilterOption] = useState<string>('currentMonth'); // по умолчанию 'currentMonth'
    const [salesData, setSalesData] = useState<{ [key: string]: number[] }>({});
    const [customPeriod, setCustomPeriod] = useState<{ startDate: Date | null; endDate: Date | null }>({ startDate: null, endDate: null });

    const [isAutoSwitching, setIsAutoSwitching] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const menuPaths = ['/', '/department-statistics', '/employees-statistics', '/goals', '/achievements'];

    const location = useLocation();
    const navigate = useNavigate();

    const [currentUser] = useState({
        id: '1',
        name: 'Marisa',
        role: UserRole.Public,
    });

    // Обработчики фильтрации периода
    // const handleFilterChange = (option: string) => {
    //     setFilterOption(option);
    // };

    // Обработчик выбора периода
    const handleCustomPeriodSelect = (start: Date, end: Date) => {
        setCustomPeriod({ startDate: start, endDate: end });
        setFilterOption('customPeriod'); // Устанавливаем фильтр на кастомный период
    };

    // Обработчики сортировки общая статистика и по направлению
    const handleSortByDate = (viewType: string) => handleSortChange(viewType, 'total-stats');
    const handleSortByDirection = (viewType: string) => handleSortChange(viewType, 'direction');

    // Функция обновления состояния сортировки и навигации
    const handleSortChange = (viewType: string, sortType: 'total-stats' | 'direction') => {
        setSortOption(sortType);
        navigate(`/${viewType}-statistics?sort=${sortType}`);
    };

    // useEffect для установки значения по умолчанию для filterOption
    useEffect(() => {
        if (!filterOption) {
            setFilterOption('currentMonth');
        }
    }, []);

    // useEffect для обработки изменения URL и обновления sortOption
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sortParam = queryParams.get('sort');
        const filterParam = queryParams.get('filter');

        if (sortParam) {
            setSortOption(sortParam as 'total-stats' | 'direction');
        }
        if (filterParam) {
            setFilterOption(filterParam);
        }
    }, [location]);

    // Функция для получения данных о продажах
    const fetchSalesData = () => {
        const data = getDepartmentData('total-stats', filterOption, customPeriod) as { [key: string]: number[] };
        setSalesData(data);
    };

    useEffect(() => {
        fetchSalesData();
    }, [filterOption, customPeriod]);

    // useEffect для автоматического переключения страниц
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoSwitching) {
            interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % allPaths.length);
                const nextIndex = (currentIndex + 1) % allPaths.length;
                navigate(allPaths[nextIndex]);
            }, 3000); // Переключение каждые 3 секунды
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoSwitching, currentIndex, navigate]);

    return (
        <>
            <Header userRole={currentUser.role} filterOption={filterOption} onFilterChange={setFilterOption} onCustomPeriodSelect={handleCustomPeriodSelect} sortOption={sortOption} />
            <div className="main-content">
                <Sidebar userRole={currentUser.role} onSortByTotalStats={handleSortByDate} onSortByDirection={handleSortByDirection} isAutoSwitching={isAutoSwitching} setIsAutoSwitching={setIsAutoSwitching} filterOption={filterOption} />
                <main className="content">
                    <Routes>
                        {/* Пути для публичной части */}
                        <Route path="/" element={<Dashboard userRole={currentUser.role} salesData={salesData} filterOption={filterOption} />} />
                        <Route path="/department-statistics" element={<DepartmentStats viewType={sortOption} filterOption={filterOption} sortOption={sortOption} customPeriod={customPeriod} />} />
                        <Route path="/employees-statistics" element={<EmployeeStats viewType={sortOption} filterOption={filterOption} sortOption={sortOption} />} />
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
