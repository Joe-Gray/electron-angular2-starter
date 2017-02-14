import { Injectable } from "@angular/core";
import { HttpService } from "../core/http.service";


@Injectable()
export class AccountService {
    private webApiUrl = 'https://localhost:44320/api/account2';

    constructor(private httpService: HttpService) { }

    public loginWithGoogle(): Promise<any> {
        return this.httpService.postFormData(this.webApiUrl, 'provider=Google')
            .then(response => response)
            .catch(this.handleError);
    }  

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }    
}