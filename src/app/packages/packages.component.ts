import { Component, OnInit } from '@angular/core';
import {SidebarService} from '../services/sidebar.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.activeLink = 'packages';
  }

  ngOnInit() {
  }

}
