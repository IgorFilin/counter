import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(minValue)
    const [enterValueAlert, setEnterValueAlert] = useState(false)
    const isMaxValueError = count === maxValue
    const isMinValueError = count === minValue
    const inputNumberError = minValue < 0 || maxValue < 0 || minValue === maxValue || maxValue < minValue


    useEffect(() => getLocalStorage(), [])

    const getLocalStorage = () => {
        const newMaxValue = localStorage.getItem('maxValues')
        const newMinValue = localStorage.getItem('minValues')
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
        if (newMinValue) {
            setMinValue((JSON.parse(newMinValue)))
            setCount((JSON.parse(newMinValue)))
        }
    }
    const addCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(minValue)
    }
    const changeMaxValue = (e: number) => {
        setMaxValue(e)
        setEnterValueAlert(true)


    }
    const changeMinValue = (e: number) => {
        setMinValue(e)
        setEnterValueAlert(true)
    }
    const setChangesValue = () => {
        localStorage.setItem('maxValues', JSON.stringify(maxValue))
        localStorage.setItem('minValues', JSON.stringify(minValue))
        setCount(minValue)
        setEnterValueAlert(false)
    }


    return (
        <div className="App">
            <div className='contentMainBlock'>
                <SettingsBlock
                    inputNumberError={inputNumberError}
                    enterValueAlert={enterValueAlert}
                    setChangesValue={setChangesValue}
                    minValue={minValue}
                    maxValue={maxValue}
                    changeMaxValue={changeMaxValue}
                    changeMinValue={changeMinValue}
                />
                <Counter
                    inputNumberError={inputNumberError}
                    enterValueAlert={enterValueAlert}
                    count={count}
                    addCount={addCount}
                    resetCount={resetCount}
                    isMaxValueError={isMaxValueError}
                    isMinValueError={isMinValueError}
                />
            </div>
        </div>
    );
}

export default App;
