import { Component } from '@angular/core';
import { faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isOpen = false;

  faClose = faClose
  faBell = faBell
  faInfoCircle = faInfoCircle
}
