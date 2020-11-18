import React from 'react';
import { ICost } from '../../../models/cost';

interface ICostProps {
    cost: ICost;
}

const CostDetails = (props: ICostProps) => {
    return(
        <div className="link-card card">
            <div className="container">
                <h6><b>Cost</b></h6>
                {props.cost.info && <p><b>Info:</b> {props.cost.info}</p>}
                {props.cost.Food && <p><b>Food:</b> {props.cost.Food}</p>}
                {props.cost.Gold && <p><b>Gold:</b> {props.cost.Gold}</p>}
                {props.cost.Stone && <p><b>Stone:</b> {props.cost.Stone}</p>}
                {props.cost.Wood && <p><b>Wood:</b> {props.cost.Wood}</p>}
            </div>
        </div>
    )
}

export default CostDetails;