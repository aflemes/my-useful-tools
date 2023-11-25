import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, SideBarComponent, ToolbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'my-useful-tools';
}
