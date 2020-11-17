import React from 'react';
import { cleanup, render, within } from '@testing-library/react';
import LinkDetail from './linkDetail';
import { IModelBase } from '../../../models/modelBase';
import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

const testList: Array<IModelBase> = [
    {
    'localId': 'testid',
    'category': 'testCategory',
    'id': 0,
    'name': 'testName',
    'age': 'testAge'
    }
]; 

// Test to see if LinkDetail contains a CusButton
afterEach(cleanup);

test("LinkDetail contains one <CusButton></CusButton>", () => {
    const { getAllByTestId, getByTestId } = render(<Router><LinkDetail itemList={testList}></LinkDetail></Router>);
    const linkDetail = getByTestId('linkDetail');
    const cusButtonInLinkDetail = within(linkDetail).getAllByTestId('cusButtonTest');
    expect(cusButtonInLinkDetail.length).toBe(1);
})

it("matches LinkDetail snapshot", () => {
    const jsonObj = TestRenderer.create(<Router><LinkDetail itemList={testList}></LinkDetail></Router>).toJSON();
    expect(jsonObj).toMatchSnapshot();
})




