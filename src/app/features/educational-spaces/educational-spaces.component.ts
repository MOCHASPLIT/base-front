import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-educational-spaces',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './educational-spaces.component.html',
    styleUrl: './educational-spaces.component.scss',
})
export class EducationalSpacesComponent {}
