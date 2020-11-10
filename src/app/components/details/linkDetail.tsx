import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IModelBase } from '../../models/modelBase';
import EmitDetailsContext from '../../services/contexts/emitDetailsContext';
import strings from '../../services/strings';
import CusButton from '../elements/button/cusButton';

interface ILinkDetailProps {
    itemList: Array<IModelBase>;
}

const LinkDetail = (props: ILinkDetailProps) => {
    console.log('LINKDETAIL', props);
    return (
        <div>
            {props.itemList && props.itemList.map((item: IModelBase) => {
                return(
                    <div>
                        <p key={item.localId}>{item.name}</p>
                        <p key={item.localId}>{item.age}</p>
                        <Link to={`/details/${item.category}/${item.id}`}>
                            <EmitDetailsContext.Consumer>
                                {(value) => <CusButton btnType={'button'} btnText={strings.goTo} onClickMethod={() => value?.clickMethod(item)}></CusButton> }    
                            </EmitDetailsContext.Consumer>
                        </Link>
                    </div>        
                )})}
        </div>
    ) 
}

export default LinkDetail;