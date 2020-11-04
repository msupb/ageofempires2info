import React from 'react';
import { IModelBase } from '../../models/modelBase';

interface IListItemProps<T> {
    item: T;
}

const ListItem = <T extends IModelBase>(props: IListItemProps<T>) => {
    console.log(props);
    return(
        <div>
            <h1></h1>
  
        </div>
    )
}

export default ListItem;