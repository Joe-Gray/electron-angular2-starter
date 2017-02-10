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
        label: 'Location',
        icon: 'fa-building',
        items: [
          { label: 'Locations', icon: 'fa-building-o', routerLink: ['/location'] }
        ]
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
