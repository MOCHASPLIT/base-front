import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    CAREERS_SUBJECTS_COLUMNS_TABLE,
    CAREERS_SUBJECTS_DATA_TABLE,
} from '../../core/constants/career-subject.constant';
import { STATUS_OPTIONS } from '../../core/constants/common.constant';
import { ICareerSubjectTable } from '../../core/interfaces/career-subject.interface';
import { TableCheckboxService } from '../../core/services/table-checkbox.service';
import { TableFilterService } from '../../core/services/table-filter.service';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-subjects',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatTableModule,
        MatCheckboxModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
    ],
    templateUrl: './subjects.component.html',
    styleUrl: './subjects.component.scss',
})
export class SubjectsComponent {
    public dataSource: MatTableDataSource<ICareerSubjectTable, MatPaginator> =
        new MatTableDataSource<ICareerSubjectTable>(
            CAREERS_SUBJECTS_DATA_TABLE
        );

    public displayedColumns: string[] = CAREERS_SUBJECTS_COLUMNS_TABLE;

    public selection: SelectionModel<ICareerSubjectTable> =
        new SelectionModel<ICareerSubjectTable>(true, []);

    public statusOptions: any = STATUS_OPTIONS;

    public subjects: { value: string; viewValue: string }[] = [
        { value: 'ASI-001', viewValue: 'Asignatura 1' },
        { value: 'ASI-002', viewValue: 'Asignatura 2' },
        { value: 'ASI-003', viewValue: 'Asignatura 3' },
    ];

    public careers: { value: string; viewValue: string }[] = [
        { value: 'CAR-001', viewValue: 'Carrera 1' },
        { value: 'CAR-002', viewValue: 'Carrera 2' },
    ];

    public subjectForm: FormGroup;

    public careerSubjectForm: FormGroup;

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _tableFilterSvc: TableFilterService,
        private readonly _tableCheckboxSvc: TableCheckboxService
    ) {
        this.subjectForm = this.setSubjectForm();
        this.careerSubjectForm = this.setCareerSubjectForm();
    }

    // Form
    private setSubjectForm(): FormGroup {
        return this._fb.group({
            name: ['', [Validators.required]],
        });
    }

    private setCareerSubjectForm(): FormGroup {
        return this._fb.group({
            period: ['', [Validators.required]],
            career: ['', [Validators.required]],
            subject: ['', [Validators.required]],
        });
    }

    public onSubmitSubject(): void {
        if (this.subjectForm.invalid) return;
        console.log(
            '🚀 ~ SubjectsComponent ~ onSubmitSubject ~ subjectForm:',
            this.subjectForm.value
        );
    }

    public onSubmitCareerSubject(): void {
        if (this.careerSubjectForm.invalid) return;
        console.log(
            '🚀 ~ SubjectsComponent ~ onSubmitCareerSubject ~ careerSubjectForm:',
            this.careerSubjectForm.value
        );
    }

    // Filter
    public applyFilter(event: Event): void {
        this._tableFilterSvc.applyFilter<ICareerSubjectTable>(
            event,
            this.dataSource
        );
    }

    // Checkbox
    public isAllSelected(): boolean {
        return this._tableCheckboxSvc.isAllSelected<ICareerSubjectTable>(
            this.selection,
            this.dataSource
        );
    }

    public toggleAllRows(): void {
        this.selection =
            this._tableCheckboxSvc.toggleAllRows<ICareerSubjectTable>(
                this.selection,
                this.dataSource
            );
    }

    public checkboxLabel(row?: ICareerSubjectTable): string {
        return this._tableCheckboxSvc.checkboxLabel<ICareerSubjectTable, 'id'>(
            this.selection,
            this.dataSource,
            'id',
            row
        );
    }
}
