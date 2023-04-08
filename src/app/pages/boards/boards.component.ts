import { Component } from '@angular/core';
import { faAngleUp, faAnglesDown, faBorderAll, faBox, faClock, faFaceSmile, faGear, faGlobe, faHeart, faHouse, faInfoCircle, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {


  faHouse = faHouse;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAnglesDown = faAnglesDown;
  faGlobe = faGlobe;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;


  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub item 1'
        },
        {
          label: 'Sub item 1.1'
        },
        {
          label: 'Sub item 1.2'
        },
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub item 2'
        },
        {
          label: 'Sub item 2.1'
        },

      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub item 3.1'
        },
        {
          label: 'Sub item 3.2'
        },
        {
          label: 'Sub item 3.3'
        },
      ]
    }
  ]
}
