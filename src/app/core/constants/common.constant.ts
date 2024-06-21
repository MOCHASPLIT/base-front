import { CommonStatuses } from '../enums/common.enum';
import { TableAction } from '../enums/table.enum';
import { IStatusOption } from '../interfaces/common.interface';

export const STATUS_OPTIONS: IStatusOption = {
    [CommonStatuses.Active]: { label: 'Activo', class: 'confirmed' },
    [CommonStatuses.Inactive]: { label: 'Inactivo', class: 'rejected' },
};

export const COMMON_TABLE_ACTIONS = [
    { label: 'Ver', name: TableAction.View },
    { label: 'Editar', name: TableAction.Edit },
    { label: 'Eliminar', name: TableAction.Delete },
];
