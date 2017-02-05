import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  uploadedFiles: any[] = [];
  logoName: string;

  constructor() { }

  onBeforeSend(event: any) : void {
    event.xhr.setRequestHeader("CustomHeader", "CustomHeaderValue");
  }

  onUpload(event: any) : void {
    console.log(event);
  }

  ngOnInit() {
  }

}
