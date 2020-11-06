import React from 'react';
import { ITechnology } from '../../models/technology';
import CostDetails from './costDetails';

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
            <CostDetails cost={props.item.cost}></CostDetails>
            <p>Build time: {props.item.build_time}</p> 
            <label>Applies to:</label>
            {props.item.applies_to && props.item.applies_to.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default TechnologyDetails;


