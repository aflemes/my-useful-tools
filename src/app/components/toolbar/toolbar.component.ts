import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideBarService } from '../../services/side-bar.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    opened: boolean = false;
    constructor(private sideBarService: SideBarService){
    }

    updateSideBar(){
        this.opened = !this.opened;
        this.sideBarService.updateSideBar(this.opened);
    }
}
