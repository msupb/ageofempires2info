import React from 'react';
import { IModelBase } from '../../models/modelBase';
import ListItem from './listItem';

interface IListProps<T> {
    itemList: Array<T>;
}

const ListComponent = <T extends IModelBase>(props: IListProps<T>) => {
    console.log(props.itemList);
    return(
        <div>
            {props.itemList.map((value) => (<ListItem className='card' key={value.localId} item={value}></ListItem>))}
        </div>
    )
}

export default ListComponent;