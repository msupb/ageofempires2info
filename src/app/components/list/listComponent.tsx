import React from 'react';
import { IModelBase } from '../../models/modelBase';

interface IListProps<T> {
    itemList: Array<T>;
}

const ListComponent = <T extends IModelBase>(props: IListProps<T>) => {
    console.log(props.itemList);
    return(
        <div>
            <h1>List</h1>
            {props.itemList.map((item) => (<p key={item.id}>{item.name}</p>))}
        </div>
    )
}

export default ListComponent;