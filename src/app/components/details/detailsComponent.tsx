import React from 'react';
import { ICivilization } from '../../models/civilization';
import { IModelBase } from '../../models/modelBase';
import { IStructure } from '../../models/structure';
import { ITechnology } from '../../models/technology';
import { IUnit } from '../../models/unit';
import Strings from '../../services/strings';
import UnitDetails from './unitDetails';

interface IDetailsProps<T> {
    item: T;
}

const DetailsComponent = <T extends IModelBase>(props: IDetailsProps<T>) => {
    console.log('Hello from details', props);

    const setType = (props: IDetailsProps<T>): IModelBase | null => {
        // Cast prop item to relevant type
        if(props.item) {
            if(props.item.category === Strings.structures)
                return props.item as unknown as IStructure;
            if(props.item.category === Strings.units)
                return props.item as unknown as IUnit;
            if(props.item.category === Strings.technologies)
                return props.item as unknown as ITechnology;
            if(props.item.category === Strings.structures)
                return props.item as unknown as ICivilization;
        }

        return null;
    }

    const item = setType(props);

    const isCivilization = (tbd: any): tbd is ICivilization => {return true}
    const isUnit = (tbd: any): tbd is IUnit => {return true}
    const isTechnology = (tbd: any): tbd is ITechnology => {return true}
    const isStructure = (tbd: any): tbd is IStructure => {return true}

    return(
        <section className="card">
            <h1>{item && item.name}</h1>
            {isUnit(item) && <UnitDetails item={item as IUnit}></UnitDetails>}
        </section>    
    )
}

export default DetailsComponent;


//     description: string;
//     expansion: string;
//     age: string;
//     cost: ICost;
//     build_time: number;
//     hit_points: number;
//     line_of_sight: number;
//     armor: string;
//     range: string;
//     relaod_time: number;
//     attack: number;
//     special: Array<string>;