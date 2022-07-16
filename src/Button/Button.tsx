import React from 'react';
import s from './Button.module.css'

type ButtonTypeProps = {
    //свои пропсы
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


export const Button: React.FC<ButtonTypeProps> = ({className,...rest}) => {
       return (
            <button className={`${s.button} ${className}`} {...rest}></button>
    );
};

