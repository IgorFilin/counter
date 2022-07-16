import React from 'react';
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterTypeProps = {
    count: number
    addCount: () => void
    resetCount: () => void
    isMaxValueError: boolean
    isMinValueError: boolean
}

export const Counter: React.FC<CounterTypeProps> = ({
                                                        count,
                                                        addCount,
                                                        resetCount,
                                                        isMaxValueError,
                                                        isMinValueError
                                                    }) => {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <Display count={count} isMaxValueError={isMaxValueError}/>
                <div className={s.buttons}>
                    <Button onClick={addCount} disabled={isMaxValueError}>inc</Button>
                    <Button className={s.buttonReset} onClick={resetCount} disabled={isMinValueError}>res</Button>
                </div>
            </div>
        </div>
    );
};

