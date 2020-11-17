import React from 'react';
import { ICivilization } from '../../../models/civilization';
import LinkDetailsComponent from '../linkDetail/linkDetailsComponent';

interface ICivilizationProps {
    item: ICivilization;
}

const CivilizationDetails = (props: ICivilizationProps) => {
    return(
        <div className="card">
            <div className="container">
                {props.item.name && <h4><b>{props.item.name}</b></h4>}
                {props.item.expansion && <p>Expansion: {props.item.expansion}</p>}
                {props.item.army_type && <p>Army type: {props.item.army_type}</p>}
                {props.item.team_bonus && <p>Created in: {props.item.team_bonus}</p>}
                {(props.item.unique_unit && props.item.unique_unit.length > 0) && <label>Unique unit:</label>}
                {(props.item.unique_unit && props.item.unique_unit.length > 0) && <LinkDetailsComponent links={props.item.unique_unit}></LinkDetailsComponent>}
                {(props.item.unique_tech && props.item.unique_tech.length > 0) && <label>Unique tech:</label>}
                {(props.item.unique_tech && props.item.unique_tech.length > 0) && <LinkDetailsComponent links={props.item.unique_tech}></LinkDetailsComponent>}
                {props.item.civilization_bonus && <label>Civilization bonus:</label>}
                {props.item.civilization_bonus && props.item.civilization_bonus.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})} 
            </div>   
        </div>
    )
}

export default CivilizationDetails;

