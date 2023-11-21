import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-working-with-json',
    standalone: true,
    imports: [CommonModule, FlexLayoutModule, MatIconModule, FormsModule],
    templateUrl: './working-with-json.component.html',
    styleUrl: './working-with-json.component.css'
})
export class WorkingWithJsonComponent {
    toConvert: string = "";
    converted: string = "";

    removeSpaces(){
        this.converted = this.removeSpacesFromJson(this.toConvert);
    }

    removeSpacesFromJson(jsonString: string): string {
        let insideQuotes = false;
        let result = '';

        for (const char of jsonString) {
            if (char === '"') {
                insideQuotes = !insideQuotes;
            }

            if (!insideQuotes && (char === ' ' || char === '\n')) {
                continue;
            }

            result += char;
        }
        return result;
    }
}
