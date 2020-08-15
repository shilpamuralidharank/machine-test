import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    inputFieldObserve: Subject<any> = new Subject();
    loginObserve: Subject<any> = new Subject();
    errorObserve: Subject<any> = new Subject();
    setLoginCredentials(inputFieldCredentials) {
        this.inputFieldObserve.next(inputFieldCredentials);
    }
    getLoginCredentials(): Observable<any> {
        return this.inputFieldObserve.asObservable();
    }
    setLogin() {
        this.loginObserve.next(true);
    }
    getLogin(): Observable<any> {
        return this.loginObserve.asObservable();
    }
    setInvalidCredentials() {
        this.errorObserve.next(true);
    }
    getInvalidCredentials(): Observable<any> {
        return this.errorObserve.asObservable();
    }
}