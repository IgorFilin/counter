import React, {ChangeEvent} from 'react';
import s from './Display.module.css'

type DisplayTypeProps = {
    count?: number
    isMaxValueError?: boolean
    input?: boolean
    changeMaxValue?: (e: number) => void
    changeMinValue?: (e: number) => void
    minValue?: number
    maxValue?: number
}


export const Display: React.FC<DisplayTypeProps> = ({
                                                        maxValue,
                                                        minValue,
                                                        changeMaxValue,
                                                        changeMinValue,
                                                        count,
                                                        isMaxValueError,
                                                        input
                                                    }) => {
    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue && changeMaxValue(Number(e.currentTarget.value))

    }
    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValue && changeMinValue(Number(e.currentTarget.value))

    }


    return (
        <div className={isMaxValueError ? s.error : s.display}>
            {input && <div className={s.conteiner}>
                <div className={s.valueDisplay}>
                    <div>max value:</div>
                    <div><input onChange={onChangeHandlerMaxValue} value={maxValue} type="number"/></div>
                </div>
                <div className={s.valueDisplay}>
                    <div>start value:</div>
                    <div><input onChange={onChangeHandlerMinValue} value={minValue} type="number"/></div>
                </div>


            </div>}
            {count && count}

        </div>
    );
};

