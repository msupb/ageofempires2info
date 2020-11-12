import React from 'react';
import { IUnit } from '../../models/unit';
import CostDetails from './costDetails';
import LinkDetailsComponent from './linkDetailsComponent';

interface IUnitProps {
    item: IUnit;
}

const UnitDetails = (props: IUnitProps) => {
 
    return(
        <div className="card">
            <div className="container">
                {props.item.name && <h4><b>{props.item.name}</b></h4>}
                {props.item.description && <p>Description: {props.item.description}</p>}
                {props.item.expansion && <p>Expansion: {props.item.expansion}</p>}
                {props.item.age && <p>Age: {props.item.age}</p>}
                {props.item.created_in && <label>Created in:</label>}
                {props.item.created_in && <LinkDetailsComponent links={[props.item.created_in]}></LinkDetailsComponent>}
                {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
                {props.item.build_time && <p>Build time: {props.item.build_time}</p>}
                {props.item.reload_time && <p>Reload time: {props.item.reload_time}</p>}
                {props.item.attack_delay && <p>Attack delay: {props.item.attack_delay}</p>}
                {props.item.movement_rate && <p>Movement rate: {props.item.movement_rate}</p>}
                {props.item.line_of_sight && <p>Line of sight: {props.item.line_of_sight}</p>}
                {props.item.hit_points && <p>Hit points: {props.item.hit_points}</p>}
                {props.item.range && <p>Range: {props.item.range}</p>}
                {props.item.attack && <p>Attack: {props.item.attack}</p>}
                {props.item.armor && <p>Armor: {props.item.armor}</p>}
                {props.item.attack_bonus && <label>Attack bonus</label>}
                {props.item.attack_bonus && props.item.attack_bonus.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})}
                {props.item.armor_bonus && <label>Armor bonus</label>}
                {props.item.armor_bonus && props.item.armor_bonus.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})}
                {props.item.search_radius && <p>Search radius: {props.item.search_radius}</p>}
                {props.item.accuracy && <p>Accuracy: {props.item.accuracy}</p>}
                {props.item.blast_radius && <p>Blast radius: {props.item.blast_radius}</p>}
            </div>    
        </div>
    )
}

export default UnitDetails;

