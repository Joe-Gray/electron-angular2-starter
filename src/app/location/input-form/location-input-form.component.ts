import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'location-input-form',
  templateUrl: './location-input-form.component.html',
  styleUrls: ['./location-input-form.component.css']
})
export class LocationInputFormComponent implements OnInit {

  @Input() location: Location;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
