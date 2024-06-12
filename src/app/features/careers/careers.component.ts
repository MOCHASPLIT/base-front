import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss',
})
export class CareersComponent {}
