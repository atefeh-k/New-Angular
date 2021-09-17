import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class locationService {

    constructor(
        private restService:  RestService
    ) {
    }

    public getProvince(): any{
        return this.restService.get('province');
    }
}