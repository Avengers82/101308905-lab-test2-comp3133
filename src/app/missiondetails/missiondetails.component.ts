import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXService } from '../network/space-x.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input()
  flightNumber!: string;
  mission!: Mission;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    
    if (this.flightNumber) {
      this.spaceXService.getMissionDetails(this.flightNumber).subscribe((data: Mission) => {
        this.mission = data;
      });
    } else {
      
      this.route.params.subscribe(params => {
        const flightNumber = params['flightNumber'];
        if (flightNumber) {
          this.spaceXService.getMissionDetails(flightNumber).subscribe((data: Mission) => {
            this.mission = data;
          });
        }
      });
    }
  }
}
