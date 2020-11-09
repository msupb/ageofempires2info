import React from 'react';
import { IUnit } from '../../models/unit';
import CostDetails from './costDetails';
import LinkDetails from './linkDetails';

interface IUnitProps {
    item: IUnit;
}

const UnitDetails = (props: IUnitProps) => {
 
    return(
        <div className="card">
            <p>Description: {props.item.description}</p>
            <p>Expansion: {props.item.expansion}</p>
            <p>Age: {props.item.age}</p>
            <label>Created in:</label>
            <LinkDetails links={[props.item.created_in]}></LinkDetails>
            <CostDetails cost={props.item.cost}></CostDetails>
            <p>Build time: {props.item.build_time}</p>
            <p>Reload time: {props.item.reload_time}</p>
            <p>Attack delay: {props.item.attack_delay}</p>
            <p>Movement rate: {props.item.movement_rate}</p>
            <p>Line of sight: {props.item.line_of_sight}</p>
            <p>Hit points: {props.item.hit_points}</p>
            <p>Range: {props.item.range}</p>
            <p>Attack: {props.item.attack}</p>
            <p>Armor: {props.item.armor}</p>
            <label>Attack bonus</label>
            {props.item.attack_bonus && props.item.attack_bonus.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}
            <label>Armor bonus</label>
            {props.item.armor_bonus && props.item.armor_bonus.map((x) => {return (<div><ul>
                <li>{x}</li>
            </ul></div>)})}
            <p>Search radius: {props.item.search_radius}</p>
            <p>Accuracy: {props.item.accuracy}</p>
            <p>Blast radius: {props.item.blast_radius}</p>
        </div>
    )
}

export default UnitDetails;

