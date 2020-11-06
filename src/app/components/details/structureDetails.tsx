import React from 'react';
import { IStructure } from '../../models/structure';
import CostDetails from './costDetails';

interface IStructureProps {
    item: IStructure;
}

const StructureDetails = (props: IStructureProps) => {
    console.log('HELLO FROM STRUCTURECARD', props);

    return(
        <div className="card">
            <p>Description: {props.item.description}</p>
            <p>Expansion: {props.item.expansion}</p>
            <p>Age: {props.item.age}</p>
            <CostDetails cost={props.item.cost}></CostDetails>
            <p>Build time: {props.item.build_time}</p>
            <p>Hit points: {props.item.hit_points}</p>
            <p>Line of sight: {props.item.line_of_sight}</p>
            <p>Armor: {props.item.armor}</p>
            <p>Range: {props.item.range}</p>
            <p>Reload time: {props.item.relaod_time}</p>
            <p>Attack: {props.item.attack}</p>
            {props.item.special && props.item.special.map((x) => {return (<div><label>Special:</label><ul>
                <li>{x}</li>
            </ul></div>)})}    
        </div>
    )
}

export default StructureDetails;