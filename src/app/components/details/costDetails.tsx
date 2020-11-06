import React from 'react';
import { ICost } from '../../models/cost';

interface ICostProps {
    cost: ICost;
}

const CostDetails = (props: ICostProps) => {
    console.log('HELLO FROM COST', props);

    return(
        <div className="card">
            <label>Cost</label>
            <p>Info: {props.cost.info && props.cost.info}</p>
            <p>Food: {props.cost.Food && props.cost.Food}</p>
            <p>Gold: {props.cost.Gold && props.cost.Gold}</p>
            <p>Stone: {props.cost.Stone && props.cost.Stone}</p>
            <p>Wood: {props.cost.Wood && props.cost.Wood}</p> 
        </div>
    )
}

export default CostDetails;