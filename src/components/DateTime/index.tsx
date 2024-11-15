import { useEffect, useState } from 'react';
import './DateTime.scss';

const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="datetime-block">
            <p className="datetime-block__text">{formatDate(currentTime)}</p>
        </div>
    );
};

export default DateTime;
