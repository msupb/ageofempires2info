import React from 'react';
import { IStructure } from '../../../models/structure';
import CostDetails from './costDetails';

interface IStructureProps {
    item: IStructure;
}

const StructureDetails = (props: IStructureProps) => {
    return(
        <div className="card">
            <div className="container">
                {props.item.name && <h4><b>{props.item.name}</b></h4>}
                {props.item.description && <p>Description: {props.item.description}</p>}
                {props.item.expansion && <p>Expansion: {props.item.expansion}</p>}
                {props.item.age && <p>Age: {props.item.age}</p>}
                {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
                {props.item.build_time && <p>Build time: {props.item.build_time}</p>}
                {props.item.hit_points && <p>Hit points: {props.item.hit_points}</p>}
                {props.item.line_of_sight && <p>Line of sight: {props.item.line_of_sight}</p>}
                {props.item.armor && <p>Armor: {props.item.armor}</p>}
                {props.item.range && <p>Range: {props.item.range}</p>}
                {props.item.relaod_time && <p>Reload time: {props.item.relaod_time}</p>}
                {props.item.attack && <p>Attack: {props.item.attack}</p>}
                {props.item.special && <label>Special:</label>}
                {props.item.special && props.item.special.map((x) => {return (<div><ul>
                    <li>{x}</li>
                </ul></div>)})}   
            </div>
        </div>
    )
}

export default StructureDetails;