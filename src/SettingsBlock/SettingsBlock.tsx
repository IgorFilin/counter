import React from 'react';
import {Counter} from "../Counter/Counter";
import s from "../Counter/Counter.module.css";
import {Display} from "../Counter/Display/Display";
import {Button} from "../Button/Button";

type SettingsBlockTypeProps = {
    minValue: number
    maxValue: number
    changeMaxValue: (e: number) => void
    changeMinValue: (e: number) => void
}

export const SettingsBlock = (props: SettingsBlockTypeProps) => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <Display
                    input
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    changeMaxValue={props.changeMaxValue}
                    changeMinValue={props.changeMinValue}
                />
                <div className={s.buttons}>
                    <Button onClick={() => {
                    }} disabled={false}>set</Button>

                </div>
            </div>
        </div>
    );
};

