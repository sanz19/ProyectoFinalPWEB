import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faHouseLaptop, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoPWEB = faLaptopCode;
  smileicon = faCommentDots;
  homeicon = faHouseLaptop;
  gh = faGithub;
  userlogo = faUser;

  constructor() { }

  ngOnInit(): void {
  }


}
