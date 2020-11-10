import React from 'react';
import { ICost } from '../../models/cost';

interface ICostProps {
    cost: ICost;
}

const CostDetails = (props: ICostProps) => {
    return(
        <div className="card">
            <label>Cost</label>
            {props.cost.info && <p>Info: {props.cost.info}</p>}
            {props.cost.Food && <p>Food: {props.cost.Food}</p>}
            {props.cost.Gold && <p>Gold: {props.cost.Gold}</p>}
            {props.cost.Stone && <p>Stone: {props.cost.Stone}</p>}
            {props.cost.Wood && <p>Wood: {props.cost.Wood}</p>}
        </div>
    )
}

export default CostDetails;