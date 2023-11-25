import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'app-working-with-json',
    standalone: true,
    imports: [CommonModule, FlexLayoutModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, MatRadioModule],
    templateUrl: './working-with-json.component.html',
    styleUrl: './working-with-json.component.css'
})
export class WorkingWithJsonComponent {
    toConvert: string = "";
    converted: string = "";
    optionSelected = "1";

    converter(){
        switch(Number(this.optionSelected)){
            case 1:                
                this.converted = this.removeSpacesFromJson(this.toConvert);
                break;
            case 2:
                this.converted = JSON.stringify(this.toConvert);
                break;
            case 3:
                this.converted = JSON.stringify(this.removeSpacesFromJson(this.toConvert));
                break;
        }
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
