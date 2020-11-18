import React from 'react';
import { IModelBase } from '../../models/modelBase';
import { Link } from "react-router-dom";
import CusButton from '../elements/button/cusButton';
import EmitDetailsContext from '../../services/contexts/emitDetailsContext';
import strings from '../../services/strings';


interface IListItemProps<T> {
    item: T;
    className: string;
}

const ListItem = <T extends IModelBase>(props: IListItemProps<T>) => {
    return(
        <div data-testid="listItem" className={props.className}>
            <div className="container">
                <h4 className="list-item-heading"><b>{props.item.name}</b></h4>               
                <span className='button-span'>
                    <Link to={`/details/${props.item.category}/${props.item.id}`}>
                        <EmitDetailsContext.Consumer>
                            {(value) => <CusButton btnType={'button'} btnText={strings.details} onClickMethod={() => value?.clickMethod(props.item)}></CusButton> }
                        </EmitDetailsContext.Consumer>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ListItem;