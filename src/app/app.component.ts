import { Component, OnInit } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'fa-home',
        routerLink: ['/home']
      },
      {
        label: 'Test',
        icon: 'fa-flask',
        items: [
          { label: 'Test Page', icon: 'fa-flask', routerLink: ['/test'] }
        ]
      }
    ];
  }
}
