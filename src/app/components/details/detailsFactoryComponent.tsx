import React from 'react';
import { ICivilization } from '../../models/civilization';
import { IModelBase } from '../../models/modelBase';
import { IStructure } from '../../models/structure';
import { ITechnology } from '../../models/technology';
import { IUnit } from '../../models/unit';
import Strings from '../../services/strings';
import CivilizationDetails from './civilizationDetails';
import StructureDetails from './structureDetails';
import TechnologyDetails from './technologyDetails';
import UnitDetails from './unitDetails';

interface IDetailsProps<T> {
    item: T;
}

const DetailsFactoryComponent = <T extends IModelBase>(props: IDetailsProps<T>) => {
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
            if(props.item.category === Strings.civilizations)
                return props.item as unknown as ICivilization;
        }

        return null;

    }

    const item = setType(props);

    console.log('ITEM', item, typeof item);

    const isCivilization = (item: any): item is ICivilization => {return item.category === Strings.civilizations}
    const isUnit = (item: any): item is IUnit => {return item.category === Strings.units}
    const isTechnology = (item: any): item is ITechnology => {return item.category === Strings.technologies}
    const isStructure = (item: any): item is IStructure => {return item.category === Strings.structures}

    return(
        <section className="card">
            <h1>{item && item.name}</h1>
            {isUnit(item) && <UnitDetails item={item as IUnit}></UnitDetails>}
            {isCivilization(item) && <CivilizationDetails item={item as ICivilization}></CivilizationDetails>}
            {isStructure(item) && <StructureDetails item={item as IStructure}></StructureDetails>}
            {isTechnology(item) && <TechnologyDetails item={item as ITechnology}></TechnologyDetails>}
        </section>
    )
}

export default DetailsFactoryComponent;
