import React from 'react';
import { IModelBase } from '../../models/modelBase';
import { Link } from "react-router-dom";
import CusButton from '../elements/button/cusButton';

interface IListItemProps<T> {
    item: T;
    className: string;
}

const ListItem = <T extends IModelBase>(props: IListItemProps<T>) => {
    console.log(props);

    const testClick = () => {
        console.log('click from card');
    }

    return(
        <div className={props.className}>
            <h4>{props.item.name}</h4>
                <span className='button-span'><Link to={`/details/${props.item.localId}`}><CusButton btnType={'button'} btnText={'Details'} onClickMethod={testClick}></CusButton></Link></span>
        </div>
    )
}

export default ListItem;