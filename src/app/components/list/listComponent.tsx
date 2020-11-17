import React from 'react';
import { IModelBase } from '../../models/modelBase';
import ListItem from './listItem';

interface IListProps<T> {
    itemList: Array<T>;
}

const ListComponent = <T extends IModelBase>(props: IListProps<T>) => {
    return(
        <div data-testid="listComponent" className="card">
            <div className="container">
                {props.itemList.map((value) => (<ListItem className='list-card card' key={value.localId} item={value}></ListItem>))}
            </div>   
        </div>
    )
}

export default ListComponent;