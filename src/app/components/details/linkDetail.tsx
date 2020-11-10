import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IModelBase } from '../../models/modelBase';
import EmitDetailsContext from '../../services/contexts/emitDetailsContext';
import strings from '../../services/strings';
import CusButton from '../elements/button/cusButton';

interface ILinkDetailProps {
    itemList: any;
}

const LinkDetail = (props: ILinkDetailProps) => {
    console.log('HELLO FROM LINKDETAIL', props.itemList);

    return (
        <div>
            {props.itemList && props.itemList.map((item: any) => {
                return(
                    <div>
                        <p key={item.localId}>{item.name}</p>
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