import React from 'react';
import { ITechnology } from '../../models/technology';

interface ITechnologyProps {
    item: ITechnology;
}

const TechnologyDetails = (props: ITechnologyProps) => {
    console.log('HELLO FROM TECHNOLOGY', props);

    return(
        <div className="card">
            <p>Description: {props.item.description}</p>
            <p>Expansion: {props.item.expansion}</p>
            <p>Age: {props.item.age}</p>
            <p>Develops in: {props.item.develops_in}</p>
            <label>Cost</label>
            <p>Info: {props.item.cost.info && props.item.cost.info}</p>
            <p>Food: {props.item.cost.Food && props.item.cost.Food}</p>
            <p>Gold: {props.item.cost.Gold && props.item.cost.Gold}</p>
            <p>Stone: {props.item.cost.Stone && props.item.cost.Stone}</p>
            <p>Wood: {props.item.cost.Wood && props.item.cost.Wood}</p>
            <p>Build time: {props.item.build_time}</p> 
            {props.item.applies_to && props.item.applies_to.map((x) => {return (<div><label>Applies to:</label><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default TechnologyDetails;


