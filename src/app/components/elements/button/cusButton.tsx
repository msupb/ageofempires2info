import React from 'react';

interface IButtonProps {
    onClickMethod: (arg?: any) => void;
    btnType: any;
    btnText: string;
}

const CusButton = (props: IButtonProps) => {
    return (
        <button data-testid="cusButtonTest" type={props.btnType} onClick={() => props.onClickMethod()}>{props.btnText}</button>
    )
}

export default CusButton;