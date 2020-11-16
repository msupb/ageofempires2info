import React from 'react';
import ReactDom from 'react-dom';
import NavBar from './navBar';
import { BrowserRouter as Router } from 'react-router-dom';


test("NavBar will render without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Router><NavBar navClass="nav" linkClass="test" paths={['test', 'test2']}></NavBar></Router>, div)
})