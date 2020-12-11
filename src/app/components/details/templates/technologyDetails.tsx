import React from 'react';
import { ITechnology } from '../../../models/technology';
import CostDetails from './costDetails';
import LinkDetailsComponent from '../linkDetail/linkDetailsComponent';

interface ITechnologyProps {
    item: ITechnology;
}

const TechnologyDetails = (props: ITechnologyProps) => {
    // Filter and move any non url strings to filtered array and print separately
    let filtered = props.item.applies_to.filter(x => !x.includes('https://'));
    filtered.forEach(x => props.item.applies_to.splice(props.item.applies_to.findIndex(z => z === x),1));

    return(
        <div className="card">
            <div className="container">
                {props.item.name && <h4 className="details-heading"><b>{props.item.name}</b></h4>}
                {props.item.description && <p><b>Description:</b> {props.item.description}</p>}
                {props.item.expansion && <p><b>Expansion:</b> {props.item.expansion}</p>}
                {props.item.age && <p><b>Age:</b> {props.item.age}</p>}
                {props.item.develops_in && <label><b>Develops in:</b></label>}
                {props.item.develops_in && <LinkDetailsComponent links={[props.item.develops_in]}></LinkDetailsComponent>}
                {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
                {props.item.build_time && <p><b>Build time:</b> {props.item.build_time}</p>} 
                {props.item.applies_to && <label><b>Applies to:</b></label>}
                {props.item.applies_to && <LinkDetailsComponent links={props.item.applies_to}></LinkDetailsComponent>}
                {(filtered.length > 0) && props.item.applies_to.map((x, v) => {return (<div key={v}><ul>
                    <li key={v}>{x}</li>
                </ul></div>)})}
            </div>
        </div>
    )
}

export default TechnologyDetails;


