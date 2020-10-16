import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-links',
  templateUrl: './main-links.component.html',
  styleUrls: ['./main-links.component.scss']
})
export class MainLinksComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
