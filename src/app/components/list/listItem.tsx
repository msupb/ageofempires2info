import React from 'react';
import { IModelBase } from '../../models/modelBase';
import { Link } from "react-router-dom";
import CusButton from '../elements/button/cusButton';
import EmitDetailsContext from '../../services/contexts/emitDetailsContext';

interface IListItemProps<T> {
    item: T;
    className: string;
}

const ListItem = <T extends IModelBase>(props: IListItemProps<T>) => {
    console.log(props);
    return(
        <div className={props.className}>
            <h4>{props.item.name}</h4>
                <span className='button-span'>
                    <Link to={`/details/${props.item.category}/${props.item.id}`}>
                        <EmitDetailsContext.Consumer>
                            {(value) => <CusButton btnType={'button'} btnText={'Details'} onClickMethod={() => value?.clickMethod(props.item)}></CusButton> }       
                        </EmitDetailsContext.Consumer>
                    </Link>
                </span>
        </div>
    )
}

export default ListItem;