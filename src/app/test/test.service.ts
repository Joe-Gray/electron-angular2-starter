import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class TestService {

  private webApiUrl = 'http://localhost:6756/api/tests';

  constructor(private httpService: HttpService) { }

  getLabel(id: string): Promise<any> {
    const url = `${this.webApiUrl}/${id}`;
    return this.httpService.get<any>(url)
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
