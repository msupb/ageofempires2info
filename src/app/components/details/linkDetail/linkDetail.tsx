import React from 'react';
import { Link } from 'react-router-dom';
import { IModelBase } from '../../../models/modelBase';
import EmitDetailsContext from '../../../services/contexts/emitDetailsContext';
import strings from '../../../services/strings';
import CusButton from '../../elements/button/cusButton';

interface ILinkDetailProps {
    itemList: Array<IModelBase>;
}

const LinkDetail = (props: ILinkDetailProps) => {
    return (
        <div data-testid="linkDetail">
            {props.itemList && props.itemList.map((item: IModelBase) => {
                return(
                    <div key={item.localId} className="container">
                        <h6><b>{item.name}</b></h6>
                        <div className="details-wrap">
                            <p className="link-details">Age: {item.age}</p>
                            <Link to={`/details/${item.category}/${item.id}`}>
                            <EmitDetailsContext.Consumer>
                                {(value) => <CusButton btnType={'button'} btnText={strings.goTo} onClickMethod={() => value?.clickMethod(item)}></CusButton> }
                            </EmitDetailsContext.Consumer>
                            </Link>
                        </div>
                    </div>
                )})}
        </div>
    )
}

export default LinkDetail;