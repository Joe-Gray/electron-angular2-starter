import { Component, OnInit }  from '@angular/core';
import { NgbModal }           from '@ng-bootstrap/ng-bootstrap';
import { LocationService }    from './location.service';
import { Location }           from './location';
import { LocationInputFormComponent } from './input-form/location-input-form.component';

@Component({
  moduleId: module.id,
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private allLocations: Array<Location>;
  private selectedLocation: Location;

  constructor(
    private locationService: LocationService,
    private modalService: NgbModal) { }

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

  showSelectedLocation(location: Location): void {
    this.selectedLocation = location;
    const modalRef = this.modalService.open(LocationInputFormComponent);
    modalRef.componentInstance.location = this.selectedLocation;
  }

}
