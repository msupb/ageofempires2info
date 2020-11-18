import React from 'react';
import { IUnit } from '../../../models/unit';
import CostDetails from './costDetails';
import LinkDetailsComponent from '../linkDetail/linkDetailsComponent';

interface IUnitProps {
    item: IUnit;
}

const UnitDetails = (props: IUnitProps) => {
 
    return(
        <div className="card">
            <div className="container">
                {props.item.name && <h4 className="details-heading"><b>{props.item.name}</b></h4>}
                {props.item.description && <p><b>Description:</b> {props.item.description}</p>}
                {props.item.expansion && <p><b>Expansion:</b> {props.item.expansion}</p>}
                {props.item.age && <p><b>Age:</b> {props.item.age}</p>}
                {props.item.created_in && <label><b>Created in:</b></label>}
                {props.item.created_in && <LinkDetailsComponent links={[props.item.created_in]}></LinkDetailsComponent>}
                {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
                {props.item.build_time && <p><b>Build time:</b> {props.item.build_time}</p>}
                {props.item.reload_time && <p><b>Reload time:</b> {props.item.reload_time}</p>}
                {props.item.attack_delay && <p><b>Attack delay:</b> {props.item.attack_delay}</p>}
                {props.item.movement_rate && <p><b>Movement rate:</b> {props.item.movement_rate}</p>}
                {props.item.line_of_sight && <p><b>Line of sight:</b> {props.item.line_of_sight}</p>}
                {props.item.hit_points && <p><b>Hit points:</b> {props.item.hit_points}</p>}
                {props.item.range && <p><b>Range:</b> {props.item.range}</p>}
                {props.item.attack && <p><b>Attack:</b> {props.item.attack}</p>}
                {props.item.armor && <p><b>Armor:</b> {props.item.armor}</p>}
                {props.item.attack_bonus && <label><b>Attack bonus</b></label>}
                {props.item.attack_bonus && props.item.attack_bonus.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})}
                {props.item.armor_bonus && <label>Armor bonus</label>}
                {props.item.armor_bonus && props.item.armor_bonus.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})}
                {props.item.search_radius && <p><b>Search radius:</b> {props.item.search_radius}</p>}
                {props.item.accuracy && <p><b>Accuracy:</b> {props.item.accuracy}</p>}
                {props.item.blast_radius && <p><b>Blast radius:</b> {props.item.blast_radius}</p>}
            </div>    
        </div>
    )
}

export default UnitDetails;

