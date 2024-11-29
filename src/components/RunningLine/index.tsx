import { useRef, useEffect, useState } from 'react';
import { duplicateRunningLineData, runningLineData, duplicateEmployeeData, employeeData, duplicateEmployeeManagerData, managerData } from './utils';
import './RunningLine.scss';
import ManagerRunningLine from '../manager/ManagerRunningLine';
import LeaderRunningLine from '../leader/LeaderRunningLine';
import Button from '../Button';

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

    const buttonsData = role === 'manager' ? buttonsDataManager : buttonsDataLeader;

    const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
    const lineRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (index: number) => {
        setActiveButtonIndex(index);
    };

    const setupAnimation = (line: HTMLDivElement | null) => {
        if (line) {
            const items = Array.from(line.children) as HTMLElement[];
            const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
            const animationDuration = totalWidth / 200; // Скорость движения
            line.style.animation = `scrollSales ${animationDuration}s linear infinite`;
        }
    };

    useEffect(() => {
        setupAnimation(lineRef.current);
    }, [activeButtonIndex]);

    return (
        <div className="running-line">
            <div className="running-line__buttons">
                {buttonsData.map((button, index) => (
                    <Button key={button.id} label={button.label} className={`running-line__button ${activeButtonIndex === index ? 'running-line__button_active' : ''}`} onClick={() => handleButtonClick(index)} />
                ))}
            </div>

            {role === 'manager' ? (
                <ManagerRunningLine duplicatedManagerData={duplicatedManagerData} activeButton={buttonsData[activeButtonIndex].id} lineRef={lineRef} />
            ) : (
                <LeaderRunningLine activeButton={buttonsData[activeButtonIndex].id} lineRef={lineRef} duplicatedData={duplicatedData} duplicatedEmployeeData={duplicatedEmployeeData} />
            )}
        </div>
    );
};

export default RunningLine;
