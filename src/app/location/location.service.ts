import { Injectable } from "@angular/core";
import { HttpService } from "../core/http.service";
import { Location } from "./location";


@Injectable()
export class LocationService {
    //private webApiUrl = 'http://marketapidev.azurewebsites.net/api/locations';
    private webApiUrl = 'https://localhost:44320/api/locations';

    constructor(private httpService: HttpService) { }

    public getById<Location>(id: number): Promise<Location> {
        return this.httpService.get<Location>(this.webApiUrl + '/' + id)
            .then(response => response)
            .catch(this.handleError);
    }

    getAll(): Promise<Array<Location>> {
        return this.httpService.get<Array<Location>>(this.webApiUrl)
            .then(response => response)
            .catch(this.handleError);
    }    

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }    
}