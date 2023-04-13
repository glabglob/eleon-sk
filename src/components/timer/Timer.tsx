import { useState, useEffect } from 'react';

import './timer.scss';

type Time = {
    hours: number;
    minutes: number;
    seconds: number;
}

const Timer: React.FC = () => {
    const [time, setTime] = useState<Time>({
        hours: 1,
        minutes: 23,
        seconds: 45
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                const { hours, minutes, seconds } = prevTime;
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    return {
                        hours: 1,
                        minutes: 23,
                        seconds: 45
                    };
                }
                if (minutes === 0 && seconds === 0) {
                    return {
                        hours: hours - 1,
                        minutes: 59,
                        seconds: 59
                    };
                }
                if (seconds === 0) {
                    return {
                        hours,
                        minutes: minutes - 1,
                        seconds: 59
                    };
                }
                return {
                    hours,
                    minutes,
                    seconds: seconds - 1
                };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (timeValue: number): string => timeValue < 10 ? `0${timeValue}` : timeValue.toString();

    return (
        <div className='timer-container'>
            <span className='timer-content'>{`${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`}</span>
        </div>
    );
}

export default Timer;