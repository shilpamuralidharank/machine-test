import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    loginCredentials = {
        email: 'testemail@gmail.com',
        password: 'test@123'
    }
}