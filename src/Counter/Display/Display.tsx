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
    inputNumberError?: boolean

}


export const Display: React.FC<DisplayTypeProps> = ({
                                                        maxValue,
                                                        minValue,
                                                        changeMaxValue,
                                                        changeMinValue,
                                                        count,
                                                        isMaxValueError,
                                                        input,
                                                        error,
                                                        inputNumberError

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
                    <div className={s.textSettings}>max value:</div>
                    <div><input className={inputNumberError ? s.inputErrors : s.inputs}
                                onChange={onChangeHandlerMaxValue} value={maxValue} type="number"/></div>
                </div>
                <div className={s.valueDisplay}>
                    <div className={s.textSettings}>start value:</div>
                    <div><input className={inputNumberError ? s.inputErrors : s.inputs}
                                onChange={onChangeHandlerMinValue} value={minValue} type="number"/></div>
                </div>
            </div>}
            {!error && !inputNumberError && count}
            {error && !inputNumberError && <div className={s.errorSet}>enter values and press 'set'</div>}
            {inputNumberError && !input && <div className={s.errorSet}>Incorrect value</div>}
        </div>
    );
};

