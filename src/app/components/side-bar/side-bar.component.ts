import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { SideBarService } from '../../services/side-bar.service';

@Component({
    selector: 'app-side-bar',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, RouterLink],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
    isOpened = false;

    toToggSideBarSubject: Subject<boolean>  = new Subject<boolean>();

    constructor(private sideBarService: SideBarService){

    }

    ngOnInit(){

        this.toToggSideBarSubject = this.sideBarService.toUpdatedSideBarSbj;
        this.toToggSideBarSubject.subscribe(async value => {
            console.log("value", value)
            this.isOpened = value;
        });
    }
}
