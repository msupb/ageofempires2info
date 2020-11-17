import React from 'react';
import { cleanup, render, within } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ListComponent from './listComponent';
import { IModelBase } from '../../models/modelBase';
import ListItem from './listItem';
import TestRenderer from 'react-test-renderer'

const testItem = {
    'localId': 'testid',
    'category': 'testCategory',
    'id': 0,
    'name': 'testName',
    'age': 'testAge'
    }

const testList: Array<IModelBase> = [testItem];

afterEach(cleanup);

test("ListComponent contains one <ListItem></ListItem>", () => {
     const { getAllByTestId, getByTestId } = render(<Router><ListComponent itemList={testList}></ListComponent></Router>);
     const listComponent = getByTestId('listComponent');
     const listItemInListComponent = within(listComponent).getAllByTestId('listItem');
     expect(listItemInListComponent.length).toBe(1);
})

it("matches ListComponent snapshot", () => {
    const jsonObj = TestRenderer.create(<Router><ListComponent itemList={testList}></ListComponent></Router>).toJSON();
    expect(jsonObj).toMatchSnapshot();
})

test("ListItem contains one <CusButton></CusButton>", () => {
    const { getAllByTestId, getByTestId } = render(<Router><ListItem className='list-card card' key="testkey" item={testItem}></ListItem></Router>);
    const listItem = getByTestId('listItem');
    const cusButtonInListItem = within(listItem).getAllByTestId('cusButtonTest');
    expect(cusButtonInListItem.length).toBe(1);
})

it("matches ListItem snapshot", () => {
    const jsonObj = TestRenderer.create(<Router><ListItem className='list-card card' key="testkey" item={testItem}></ListItem></Router>).toJSON();
    expect(jsonObj).toMatchSnapshot();
})


