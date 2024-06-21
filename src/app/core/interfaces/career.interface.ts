import { CommonStatuses } from '../enums/common.enum';

export interface ICareer {
    id: string;
    name: string;
    description: string;
    numberOfPeriods: number;
    status: CommonStatuses;
}
