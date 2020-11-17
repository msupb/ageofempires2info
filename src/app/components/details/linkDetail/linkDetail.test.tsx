import React from 'react';
import { render, within } from '@testing-library/react';
import LinkDetail from './linkDetail';
import { IModelBase } from '../../../models/modelBase';
import { BrowserRouter as Router } from 'react-router-dom';

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

test("LinkDetail renders one <CusButton></CusButton>", () => {
    const { getByTestId } = render(<Router><LinkDetail itemList={testList}></LinkDetail></Router>);
    const linkDetail = getByTestId('linkDetail');
    const cusButtonInLinkDetail = within(linkDetail).getByTestId('cusButtonTest');
    expect(linkDetail).toContainElement(cusButtonInLinkDetail);
})




