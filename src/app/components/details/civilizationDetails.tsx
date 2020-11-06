import React from 'react';
import { ICivilization } from '../../models/civilization';

interface ICivilizationProps {
    item: ICivilization;
}

const CivilizationDetails = (props: ICivilizationProps) => {
    console.log('HELLO FROM UNITCARD', props);

    return(
        <div className="card">
            <p>Expansion: {props.item.expansion}</p>
            <p>Army type: {props.item.army_type}</p>
            <p>Created in: {props.item.team_bonus}</p> 
            {props.item.unique_unit && props.item.unique_unit.map((x) => {return (<div><label>Unique unit:</label><ul>
                <li>{x}</li>
            </ul></div>)})}
            {props.item.unique_tech && props.item.unique_tech.map((x) => {return (<div><label>Unique tech:</label><ul>
                <li>{x}</li>
            </ul></div>)})}
            {props.item.civilization_bonus && props.item.civilization_bonus.map((x) => {return (<div><label>Civilization bonus:</label><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default CivilizationDetails;

