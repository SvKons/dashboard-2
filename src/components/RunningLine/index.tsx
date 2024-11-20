import { useRef, useEffect, useState } from 'react';
import { duplicateEmployeeManagerData, managerData } from '../ManagerRunningLine/utils';
import { duplicateRunningLineData, runningLineData, duplicateEmployeeData, employeeData } from '../LeaderRunningLine/utils';
import './RunningLine.scss';
import ManagerRunningLine from '../ManagerRunningLine';
import LeaderRunningLine from '../LeaderRunningLine';
const buttonsDataManager = [
    { id: 'sales', label: 'Сумма продаж' },
    { id: 'transactions', label: 'Количество сделок' },
];

const buttonsDataLeader = [
    { id: 'first', label: 'Общая информация' },
    { id: 'second', label: 'Сумма продаж' },
    { id: 'third', label: 'Количество сделок' },
];

const RunningLine = ({ role }: { role: 'manager' | 'leader' }) => {
    const duplicatedManagerData = duplicateEmployeeManagerData(managerData);
    const duplicatedData = duplicateRunningLineData(runningLineData);
    const duplicatedEmployeeData = duplicateEmployeeData(employeeData);

    const [activeButton, setActiveButton] = useState<string>(role === 'manager' ? 'sales' : 'first');
    const lineRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId);
    };

    const setupAnimation = (line: HTMLDivElement | null) => {
        if (line) {
            const items = Array.from(line.children) as HTMLElement[];
            const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
            const animationDuration = totalWidth / 100; // Скорость движения
            line.style.animation = `scrollSales ${animationDuration}s linear infinite`;
        }
    };

    useEffect(() => {
        setupAnimation(lineRef.current);
    }, [activeButton]);

    return (
        <div className="running-line">
            <div className="running-line__buttons">
                {(role === 'manager' ? buttonsDataManager : buttonsDataLeader).map(button => (
                    <button key={button.id} className={`running-line__button ${activeButton === button.id ? 'running-line__button_active' : ''}`} onClick={() => handleButtonClick(button.id)}>
                        {button.label}
                    </button>
                ))}
            </div>

            {role === 'manager' ? (
                <ManagerRunningLine duplicatedManagerData={duplicatedManagerData} activeButton={activeButton} lineRef={lineRef} />
            ) : (
                <LeaderRunningLine activeButton={activeButton} lineRef={lineRef} duplicatedData={duplicatedData} duplicatedEmployeeData={duplicatedEmployeeData} />
            )}
        </div>
    );
};

export default RunningLine;
