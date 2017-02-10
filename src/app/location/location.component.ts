import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { Location } from './location';

@Component({
  moduleId: module.id,
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private allLocations: Array<Location>;
  private selectedLocation: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.locationService.getAll()
      .then(locations => {
        this.allLocations = locations;
        this.selectedLocation = this.allLocations[0];
      })
      .catch(error => console.log(error));
  }

}
