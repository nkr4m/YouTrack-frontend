import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class refreshDashboardService {

    private refreshDashboard = new BehaviorSubject('false');
    refreshStatus = this.refreshDashboard.asObservable();

    constructor() {

    }
    updateStatus(message: string) {
        this.refreshDashboard.next(message)
        // this.refreshDashboard = new BehaviorSubject("false");
    }
}