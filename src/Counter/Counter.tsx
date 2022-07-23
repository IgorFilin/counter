import React from 'react';
import {Display} from "./Display/Display";
import {Button} from "../Button/Button";
import s from './Counter.module.css'

type CounterTypeProps = {
    count?: number
    addCount: () => void
    resetCount: () => void
    isMaxValueError: boolean
    isMinValueError: boolean
    error: boolean
    inputNumberError: boolean
}

export const Counter: React.FC<CounterTypeProps> = ({
                                                        count,
                                                        addCount,
                                                        resetCount,
                                                        isMaxValueError,
                                                        isMinValueError,
                                                        error,
                                                        inputNumberError
                                                    }) => {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <Display error={error} count={count} isMaxValueError={isMaxValueError}
                         inputNumberError={inputNumberError}/>
                <div className={s.buttons}>
                    <Button onClick={addCount} disabled={isMaxValueError || error}>inc</Button>
                    <Button className={s.buttonReset} onClick={resetCount}
                            disabled={isMinValueError || error}>res</Button>
                </div>
            </div>
        </div>
    );
};

