import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../network/space-x.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[]=[];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getMissions().subscribe((data: Mission[]) => {
      this.missions = data;
    });
  }
}
