import { CommonStatuses } from '../enums/common.enum';
import { ICareer } from './career.interface';
import { ITableAction } from './common.interface';
import { ISubject } from './subject.interface';

export interface ICareerSubject {
    id: string;
    period: number;
    subject: ISubject;
    career: ICareer;
    status: CommonStatuses;
}

export interface ICareerSubjectTable extends ICareerSubject {
    action: ITableAction[];
}
