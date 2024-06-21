import { CommonStatuses } from '../enums/common.enum';
import { TableAction } from '../enums/table.enum';

export interface ITableAction {
    label: string;
    name: TableAction;
}

export type IStatusOption = {
    [key in CommonStatuses]: { label: string; class: string };
};
