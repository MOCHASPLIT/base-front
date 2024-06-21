import { CommonStatuses } from '../enums/common.enum';
import { ICareerSubjectTable } from '../interfaces/career-subject.interface';
import { COMMON_TABLE_ACTIONS } from './common.constant';

export const CAREERS_SUBJECTS_DATA_TABLE: ICareerSubjectTable[] = [
    {
        id: 'CAR-MAT-001',
        period: 1,
        subject: {
            id: 'ASI-001',
            name: 'Asignatura 1',
            status: CommonStatuses.Active,
        },
        career: {
            id: 'CAR-001',
            name: 'Carrera 1',
            description: 'Descripción de la carrera 1',
            numberOfPeriods: 8,
            status: CommonStatuses.Active,
        },
        status: CommonStatuses.Active,
        action: COMMON_TABLE_ACTIONS,
    },
    {
        id: 'CAR-MAT-002',
        period: 5,
        subject: {
            id: 'ASI-002',
            name: 'Asignatura 2',
            status: CommonStatuses.Active,
        },
        career: {
            id: 'CAR-001',
            name: 'Carrera 1',
            description: 'Descripción de la carrera 1',
            numberOfPeriods: 8,
            status: CommonStatuses.Active,
        },
        status: CommonStatuses.Active,
        action: COMMON_TABLE_ACTIONS,
    },
    {
        id: 'CAR-MAT-003',
        period: 6,
        subject: {
            id: 'ASI-003',
            name: 'Asignatura 3',
            status: CommonStatuses.Active,
        },
        career: {
            id: 'CAR-001',
            name: 'Carrera 1',
            description: 'Descripción de la carrera 1',
            numberOfPeriods: 8,
            status: CommonStatuses.Active,
        },
        status: CommonStatuses.Inactive,
        action: COMMON_TABLE_ACTIONS,
    },
    {
        id: 'CAR-MAT-004',
        period: 4,
        subject: {
            id: 'ASI-001',
            name: 'Asignatura 1',
            status: CommonStatuses.Active,
        },
        career: {
            id: 'CAR-002',
            name: 'Carrera 2',
            description: 'Descripción de la carrera 2',
            numberOfPeriods: 9,
            status: CommonStatuses.Active,
        },
        status: CommonStatuses.Active,
        action: COMMON_TABLE_ACTIONS,
    },
    {
        id: 'CAR-MAT-005',
        period: 9,
        subject: {
            id: 'ASI-002',
            name: 'Asignatura 2',
            status: CommonStatuses.Active,
        },
        career: {
            id: 'CAR-002',
            name: 'Carrera 2',
            description: 'Descripción de la carrera 2',
            numberOfPeriods: 9,
            status: CommonStatuses.Active,
        },
        status: CommonStatuses.Inactive,
        action: COMMON_TABLE_ACTIONS,
    },
];

export const CAREERS_SUBJECTS_COLUMNS_TABLE = [
    'select',
    'id',
    'subject',
    'career',
    'period',
    'status',
    'action',
];
