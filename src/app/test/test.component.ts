import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  uploadedFiles: any[] = [];
  logoName: string;

  constructor(private httpService: HttpService) { }

  onBeforeSend(event: any) : void {
    event.xhr.setRequestHeader("CustomHeader", "CustomHeaderValue");
  }

  onUpload(event: any) : void {
    console.log(event);
  }

  ngOnInit() {
    this.httpService.get<any>('https://localhost:44377/api/locations/secureecho').then(response => this.logoName = response.message);
  }

}
