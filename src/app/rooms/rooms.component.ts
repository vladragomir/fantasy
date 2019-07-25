import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../services/sidebar.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.activeLink = 'rooms';
  }

  ngOnInit() {
  }

}
