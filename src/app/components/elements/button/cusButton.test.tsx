import React from 'react';
import ReactDom from 'react-dom';
import CusButton from './cusButton';

const onTestClick = () => {
    return "Test click";
}

test("CusButton will render without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<CusButton btnText="Test" btnType="button" onClickMethod={onTestClick}></CusButton>, div)
})