import { useRef, useEffect } from 'react';
import './PercentStatsBlock.scss';

interface IStatCardProps {
    title?: string;
    percentage: number;
}

const PercentStatsBlock = ({ title, percentage }: IStatCardProps) => {
    const circleRef = useRef<SVGCircleElement>(null);
    const radius = 50; // радиус круга
    const strokeWidth = 14; // ширина обводки
    const circumference = 2 * Math.PI * radius; // длина окружности

    useEffect(() => {
        if (circleRef.current) {
            // Установите начальное значение strokeDashoffset
            circleRef.current.style.strokeDasharray = String(circumference);
            circleRef.current.style.strokeDashoffset = String(circumference);

            // Используйте requestAnimationFrame для плавной анимации
            requestAnimationFrame(() => {
                const newOffset = circumference - (circumference * percentage) / 100;
                circleRef.current!.style.transition = 'stroke-dashoffset 3.8s ease-in-out'; // Используем оператор "!"
                circleRef.current!.style.strokeDashoffset = String(newOffset); // Используем оператор "!"
            });
        }
    }, [percentage, circumference]);

    return (
        <div className="percent-stat percent-stat_spacing">
            <div className="percent-stat__title">{title}</div>
            <div className="percent-stat__percent">
                <div className="percent-stat__circle">
                    <div className="percent-stat__pie">
                        <svg width="120" height="120">
                            <circle
                                cx="60"
                                cy="60"
                                r={radius}
                                ref={circleRef}
                                style={{
                                    fill: 'transparent',
                                    stroke: 'rgba(255, 212, 59, 0.8)',
                                    strokeWidth: strokeWidth,
                                }}
                            />
                        </svg>
                    </div>
                    <div className="percent-stat__counter">{percentage}%</div>
                </div>
            </div>
        </div>
    );
};
export default PercentStatsBlock;
