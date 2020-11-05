import React from 'react';
import { IModelBase } from '../../models/modelBase';

interface IDetailsProps<T> {
    item: T | null;
}

const DetailsComponent = <T extends IModelBase>(props: IDetailsProps<T>) => {
    console.log('Hello from details', props);
    return(
        <h1>Details</h1>
    )
}

export default DetailsComponent;