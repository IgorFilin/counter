import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";


function App() {
    const minValue = 0
    const maxValue = 5

    const [count, setCount] = useState<number>(minValue)
    const isMaxValueError = count === maxValue
    const isMinValueError = count === minValue

    const addCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(minValue)
    }


    return (
        <div className="App">
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
