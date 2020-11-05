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
        <div className={props.className}>
            <h4>{props.item.name}</h4>
                <span className='button-span'>
                    <Link to={"/details"}>
                        <EmitDetailsContext.Consumer>
                            {(value) => <CusButton btnType={'button'} btnText={strings.details} onClickMethod={() => value?.clickMethod(props.item)}></CusButton> }       
                        </EmitDetailsContext.Consumer>
                    </Link>
                </span>
        </div>
    )
}

export default ListItem;