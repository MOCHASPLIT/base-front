import { CommonStatuses } from '../enums/common.enum';

export interface ISubject {
    id: string;
    name: string;
    status: CommonStatuses;
}
