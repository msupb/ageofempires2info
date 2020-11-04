import React from 'react';
import { IModelBase } from '../../models/modelBase';

interface IListItemProps<T> {
    item: T;
    className: string;
}

const ListItem = <T extends IModelBase>(props: IListItemProps<T>) => {
    console.log(props);
    return(
        <div className={props.className}>
            <h2>{props.item.name}</h2>
        </div>
    )
}

export default ListItem;