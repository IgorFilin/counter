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
    error?: boolean

}


export const Display: React.FC<DisplayTypeProps> = ({
                                                        maxValue,
                                                        minValue,
                                                        changeMaxValue,
                                                        changeMinValue,
                                                        count,
                                                        isMaxValueError,
                                                        input,
                                                        error

                                                    }) => {
    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue && changeMaxValue(Number(e.currentTarget.value))

    }
    const onChangeHandlerMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValue && changeMinValue(Number(e.currentTarget.value))

    }

    console.log(error)
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
            {!error && count}
            {error && <div className={s.errorSet}>enter values and press 'set'</div>}
        </div>
    );
};

