import React from 'react';
import { ICivilization } from '../../models/civilization';
import LinkDetailsComponent from './linkDetailsComponent';

interface ICivilizationProps {
    item: ICivilization;
}

const CivilizationDetails = (props: ICivilizationProps) => {
    return(
        <div className="card">
            {props.item.expansion && <p>Expansion: {props.item.expansion}</p>}
            {props.item.army_type && <p>Army type: {props.item.army_type}</p>}
            {props.item.team_bonus && <p>Created in: {props.item.team_bonus}</p>}
            {props.item.unique_unit && <label>Unique unit:</label>}
            {props.item.unique_unit && <LinkDetailsComponent links={props.item.unique_unit}></LinkDetailsComponent>}
            {props.item.unique_tech && <label>Unique tech:</label>}
            {props.item.unique_tech && <LinkDetailsComponent links={props.item.unique_tech}></LinkDetailsComponent>}
            {props.item.civilization_bonus && <label>Civilization bonus:</label>}
            {props.item.civilization_bonus && props.item.civilization_bonus.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default CivilizationDetails;

