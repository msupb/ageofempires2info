import React from 'react';
import { IModel } from '../../models/model';

interface IListProps<T> {
    itemList: Array<T>;
}

const ListComponent = <T extends IModel>(props: IListProps<T>) => {
    console.log(props.itemList);
    return(
        <div>
            <h1>List</h1>
            {props.itemList.map((item) => (<p key={item.id}>{item.name}</p>))}
        </div>
    )
}

export default ListComponent;