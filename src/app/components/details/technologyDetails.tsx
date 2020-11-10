import React from 'react';
import { ITechnology } from '../../models/technology';
import CostDetails from './costDetails';
import LinkDetailsComponent from './linkDetailsComponent';

interface ITechnologyProps {
    item: ITechnology;
}

const TechnologyDetails = (props: ITechnologyProps) => {
    let isNotUrl: boolean = false;

    props.item.applies_to.forEach(x => {
        isNotUrl = x.includes(' ');
    });

    return(
        <div className="card">
            {props.item.description && <p>Description: {props.item.description}</p>}
            {props.item.expansion && <p>Expansion: {props.item.expansion}</p>}
            {props.item.age && <p>Age: {props.item.age}</p>}
            {props.item.develops_in && <label>Develops in:</label>}
            {props.item.develops_in && <LinkDetailsComponent links={[props.item.develops_in]}></LinkDetailsComponent>}
            {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
            {props.item.build_time && <p>Build time: {props.item.build_time}</p>} 
            {props.item.applies_to && <label>Applies to:</label>}
            {(props.item.applies_to && !isNotUrl) && <LinkDetailsComponent links={props.item.applies_to}></LinkDetailsComponent>}
            {(props.item.applies_to && isNotUrl) && props.item.applies_to.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}
        </div>
    )
}

export default TechnologyDetails;


