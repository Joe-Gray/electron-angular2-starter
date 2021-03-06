import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    public get<T>(url: string): Promise<T> {
        return this.http.get(url, { headers: this.getStandardHeaders() })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private getStandardHeaders(): Headers {
        return new Headers(
            {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "CustomHeader": "customValue"
            }
        );
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error);
    }
}