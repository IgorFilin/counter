import React from 'react';
import s from './Display.module.css'

type DisplayTypeProps = {
    count: number
    isMaxValueError: boolean
}

export const Display: React.FC<DisplayTypeProps> = ({count, isMaxValueError}) => {
    return (
        <div className={isMaxValueError ? s.error : s.display}>
            {count}
        </div>
    );
};

