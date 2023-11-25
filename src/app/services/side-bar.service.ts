import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SideBarService {
    toUpdatedSideBarSbj = new Subject<boolean>();

    constructor() { }

    updateSideBar(value: boolean){
        this.toUpdatedSideBarSbj.next(value);
    }
}
