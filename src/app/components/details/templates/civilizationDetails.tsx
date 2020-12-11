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
                {props.item.name && <h4 className="details-heading"><b>{props.item.name}</b></h4>}
                {props.item.expansion && <p><b>Expansion:</b> {props.item.expansion}</p>}
                {props.item.army_type && <p><b>Army type:</b> {props.item.army_type}</p>}
                {props.item.team_bonus && <p><b>Created in:</b> {props.item.team_bonus}</p>}
                {(props.item.unique_unit && props.item.unique_unit.length > 0) && <label><b>Unique unit:</b></label>}
                {(props.item.unique_unit && props.item.unique_unit.length > 0) && <LinkDetailsComponent links={props.item.unique_unit}></LinkDetailsComponent>}
                {(props.item.unique_tech && props.item.unique_tech.length > 0) && <label><b>Unique tech:</b></label>}
                {(props.item.unique_tech && props.item.unique_tech.length > 0) && <LinkDetailsComponent links={props.item.unique_tech}></LinkDetailsComponent>}
                {props.item.civilization_bonus && <label><b>Civilization bonus:</b></label>}
                {props.item.civilization_bonus && props.item.civilization_bonus.map((x, v) => {return (<div key={v}><ul>
                    <li key={v}>{x}</li>
                </ul></div>)})}
            </div>
        </div>
    )
}

export default CivilizationDetails;

