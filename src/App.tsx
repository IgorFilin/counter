import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBlock} from "./SettingsBlock/SettingsBlock";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    console.log(maxValue)
    const [count, setCount] = useState<number>(minValue)
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
    }
    const changeMinValue = (e: number) => {
        setMinValue(e)
    }


    return (
        <div className="App">
            <SettingsBlock
                minValue={minValue}
                maxValue={maxValue}
                changeMaxValue={changeMaxValue}
                changeMinValue={changeMinValue}
            />
            <Counter count={count}
                     addCount={addCount}
                     resetCount={resetCount}
                     isMaxValueError={isMaxValueError}
                     isMinValueError={isMinValueError}
            />
        </div>
    );
}

export default App;
