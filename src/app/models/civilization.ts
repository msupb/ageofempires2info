import {IModel} from './model';

export interface ICivilization extends IModel {
    id: number;
    name: string;
    expansion: string;
    army_type: string;
    unique_unit: Array<string>;
    unique_tech: Array<string>;
    team_bonus: string;
    civilization_bonus: Array<string>;
}