import React from 'react';
import s from "../Counter/Counter.module.css";
import {Display} from "../Counter/Display/Display";
import {Button} from "../Button/Button";


type SettingsBlockTypeProps = {
    minValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeMinValue: (e: number) => void
    setChangesValue: () => void
    enterValueAlert: boolean
    inputNumberError: boolean
}

export const SettingsBlock = (props: SettingsBlockTypeProps) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <Display
                    inputNumberError={props.inputNumberError}
                    enterValuesAlert={false}
                    input
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    changeMaxValue={props.changeMaxValue}
                    changeMinValue={props.changeMinValue}
                />
                <div className={s.buttons}>
                    <Button onClick={props.setChangesValue}
                            disabled={!props.enterValueAlert || props.inputNumberError}>set</Button>

                </div>
            </div>
        </div>
    );
};

