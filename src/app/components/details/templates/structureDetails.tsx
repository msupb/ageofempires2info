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
                {props.item.name && <h4 className="details-heading"><b>{props.item.name}</b></h4>}
                {props.item.description && <p><b>Description:</b> {props.item.description}</p>}
                {props.item.expansion && <p><b>Expansion:</b> {props.item.expansion}</p>}
                {props.item.age && <p><b>Age:</b> {props.item.age}</p>}
                {props.item.cost && <CostDetails cost={props.item.cost}></CostDetails>}
                {props.item.build_time && <p><b>Build time:</b> {props.item.build_time}</p>}
                {props.item.hit_points && <p><b>Hit points:</b> {props.item.hit_points}</p>}
                {props.item.line_of_sight && <p><b>Line of sight:</b> {props.item.line_of_sight}</p>}
                {props.item.armor && <p><b>Armor:</b> {props.item.armor}</p>}
                {props.item.range && <p><b>Range:</b> {props.item.range}</p>}
                {props.item.relaod_time && <p><b>Reload time:</b> {props.item.relaod_time}</p>}
                {props.item.attack && <p><b>Attack:</b> {props.item.attack}</p>}
                {props.item.special && <label><b>Special:</b></label>}
                {props.item.special && props.item.special.map((x, v) => {return (<div key={v}><ul>
                    <li key={v}>{x}</li>
                </ul></div>)})}   
            </div>
        </div>
    )
}

export default StructureDetails;