import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './navBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';

afterEach(cleanup);

test("NavBar component renders properly", () => {
    const div = document.createElement('div');
    ReactDom.render(<Router><NavBar navClass="nav" linkClass="test" paths={['test', 'test2']}></NavBar></Router>, div);
    ReactDom.unmountComponentAtNode(div);
})

it("renders ul", () => {
    const { getByTestId } = render(<Router><NavBar navClass="nav" linkClass="test" paths={['test']}></NavBar></Router>);
    expect(getByTestId('navul')).toHaveTextContent('TEST');
})

it("matches snapshot", () => {
    const jsonObj = TestRenderer.create(<Router><NavBar navClass="nav" linkClass="test" paths={['test']}></NavBar></Router>).toJSON();
    expect(jsonObj).toMatchSnapshot();
})