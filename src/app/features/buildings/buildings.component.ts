import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-buildings',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './buildings.component.html',
    styleUrl: './buildings.component.scss',
})
export class BuildingsComponent {}
