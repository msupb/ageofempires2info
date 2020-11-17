import React from 'react';
import ReactDom from 'react-dom';
import CusButton from './cusButton';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

const onTestClick = () => {
    return "Test click";
}

test("CusButton component renders properly", () => {
    const div = document.createElement('div');
    ReactDom.render(<CusButton btnText="Test" btnType="button" onClickMethod={onTestClick} ></CusButton>, div);
    ReactDom.unmountComponentAtNode(div);
})

it("renders button", () => {
    const { getByTestId } = render(<CusButton btnText="Test" btnType="button" onClickMethod={onTestClick}></CusButton>);
    expect(getByTestId('cusButtonTest')).toHaveTextContent('Test');
})

it("matches snapshot", () => {
    const jsonObj = TestRenderer.create(<CusButton btnText="Test" btnType="button" onClickMethod={onTestClick}></CusButton>).toJSON();
    expect(jsonObj).toMatchSnapshot();
})