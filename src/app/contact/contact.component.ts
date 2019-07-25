import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.activeLink = 'contact';
  }

  ngOnInit() {
  }

}
