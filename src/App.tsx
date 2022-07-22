import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(minValue)
    const [error, setError] = useState(false)
    const isMaxValueError = count === maxValue
    const isMinValueError = count === minValue

    const addCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(minValue)
    }
    const changeMaxValue = (e: number) => {
        setMaxValue(e)
        setError(true)


    }
    const changeMinValue = (e: number) => {
        setMinValue(e)
        setError(true)
    }
    const setChangesValue = () => {
        localStorage.setItem('maxValues', JSON.stringify(maxValue))
        localStorage.setItem('minValues', JSON.stringify(minValue))
        setCount(minValue)
        setError(false)
    }


    return (
        <div className="App">
            <SettingsBlock
                setChangesValue={setChangesValue}
                minValue={minValue}
                maxValue={maxValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
            />
            <Counter
                error={error}
                count={count}
                addCount={addCount}
                resetCount={resetCount}
                isMaxValueError={isMaxValueError}
                isMinValueError={isMinValueError}
            />
        </div>
    );
}

export default App;
