import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const typed = new Typed(".auto-type", {
      strings: ['Abdullah Al Nomaan', 'Professional Web Designer', 'Professional Web Developer'],
      typeSpeed: 40,
      smartBackspace: false,
      backSpeed: 40,
      loop: true,
      cursorChar: '|',
      backDelay: 1500,
    });
  }




}
