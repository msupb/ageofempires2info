import React from 'react';
import { IUnit } from '../../models/unit';

interface IUnitProps {
    item: IUnit;
}

const UnitDetails = (props: IUnitProps) => {
    console.log('HELLO FROM UNITCARD', props);

    return(
        <div className="card">
            <p>Description: {props.item.description}</p>
            <p>Expansion: {props.item.expansion}</p>
            <p>Age: {props.item.age}</p>
            <p>Created in: {props.item.created_in}</p>
            <label>Cost</label>
            <p>Info: {props.item.cost.info && props.item.cost.info}</p>
            <p>Food: {props.item.cost.Food && props.item.cost.Food}</p>
            <p>Gold: {props.item.cost.Gold && props.item.cost.Gold}</p>
            <p>Stone: {props.item.cost.Stone && props.item.cost.Stone}</p>
            <p>Wood: {props.item.cost.Wood && props.item.cost.Wood}</p>
            <p>Build time: {props.item.build_time}</p>
            <p>Reload time: {props.item.reload_time}</p>
            <p>Attack delay: {props.item.attack_delay}</p>
            <p>Movement rate: {props.item.movement_rate}</p>
            <p>Line of sight: {props.item.line_of_sight}</p>
            <p>Hit points: {props.item.hit_points}</p>
            <p>Range: {props.item.range}</p>
            <p>Attack: {props.item.attack}</p>
            <p>Armor: {props.item.armor}</p>
            {props.item.attack_bonus && props.item.attack_bonus.map((x) => {return (<div><label>Attack bonus</label><ul>
                <li>{x}</li>
            </ul></div>)})}
            {props.item.armor_bonus && props.item.armor_bonus.map((x) => {return (<div><label>Armor bonus</label><ul>
                <li>{x}</li>
            </ul></div>)})}
            <p>Search radius: {props.item.search_radius}</p>
            <p>Accuracy: {props.item.accuracy}</p>
            <p>Blast radius: {props.item.blast_radius}</p>
        </div>
    )
}

export default UnitDetails;

