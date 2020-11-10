import React from 'react';
import { ICivilization } from '../../models/civilization';
import LinkDetailsComponent from './linkDetailsComponent';

interface ICivilizationProps {
    item: ICivilization;
}

const CivilizationDetails = (props: ICivilizationProps) => {
 
    return(
        <div className="card">
            <p>Expansion: {props.item.expansion}</p>
            <p>Army type: {props.item.army_type}</p>
            <p>Created in: {props.item.team_bonus}</p> 
            <label>Unique unit:</label>
            <LinkDetailsComponent links={props.item.unique_unit}></LinkDetailsComponent>
            <label>Unique tech:</label>
            <LinkDetailsComponent links={props.item.unique_tech}></LinkDetailsComponent>
            <label>Civilization bonus:</label>
            {props.item.civilization_bonus && props.item.civilization_bonus.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default CivilizationDetails;

