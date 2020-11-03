import {IModelBase} from './modelBase';

export interface ICivilization extends IModelBase {
    expansion: string;
    army_type: string;
    unique_unit: Array<string>;
    unique_tech: Array<string>;
    team_bonus: string;
    civilization_bonus: Array<string>;
}